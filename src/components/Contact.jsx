import  emailjs  from '@emailjs/browser'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { sectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import Earth from './canvas/Earth'

const temporaryEmailDomains = [
  '10minutemail.com', 'guerrillamail.com', 'mailinator.com', 'maildrop.cc', 'temp-mail.org', 'tempmail.com', 'yopmail.com', 'maxturns.com'
]

const tempEmailkeywords = [ 'temp', 'guerrilla', '10min', 'disposable', 'fake', 'trash']


const isTemporary =(email) => {
  const domain = email.split('@')[1].toLowerCase()
  if (temporaryEmailDomains.includes(domain)) return true;

  return tempEmailkeywords.some(keyword => domain.includes(keyword))
}
const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
      const{name, value} = e.target
      setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
      e.preventDefault()
      setLoading(true)

      if(!form.name || !form.email || !form.message){
        setLoading(false)
        alert("please fill the form first")
        return;
      }

      if(isTemporary(form.email)) {
        setLoading(false);
        alert('Provide your legit email address')
        return
      }
      
      emailjs.send('service_ztyppth', 'template_1tquwkq',
        {
          from_name: form.name,
          to_name: 'Mayukh',
          from_email: form.email,
          to_email: 'mayukhganguly6@gmail.com',
          message: form.message
        }, 'ITaKtWYEf6-rHf02v')
        .then(() => {
          setLoading(false)
          alert('Thank you for contact! I will get back to you as soon as possible')
          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert('something went wrong')
        })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div variants={slideIn('left', 'tween', 0.2, 1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
          <p className={styles.sectionSubText}>get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'>
            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='what is your name?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium' 
              />
            </label>
            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='what is your email?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium' 
              />
            </label>
            <label className='flex flex-col '>
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='what do u want to say ?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium' 
              />
            </label>

            <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-white-100 hover:text-black transition-all duration-500'>
                {loading? 'sending...' : 'sent'}
            </button>
          </form>
        </motion.div>

        <motion.div variants={slideIn('right', "tween", 0.2, 1)} 
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default sectionWrapper(Contact, "contact")