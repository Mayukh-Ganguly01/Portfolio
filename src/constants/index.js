import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    ashram,
    nsec,
    vidyapith,
    rudra,
    riddhi,
    sourik,
    anik,
    harshit,
    sourav,
    studynotion,
    jarvis, 
    chatbot
  } from "../assets";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education",
    },
    {
      id: "project",
      title: "project"
    },
    {
      id: "contact",
      title: "Contact",
    }
    
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Software Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Mahesh Sri Ramkrishna Ashram",
      company_name: "Rishra",
      icon: ashram,
      iconBg: "#383E56",
      date: "January 2009 - April 2019", 
      points: [
        "Achieved 81.8% in the 10th-grade board examinations",
        "Earned a certificate in Basic Computer Application in collaboration with ICT@Schools during 2018-2019",
        "Developed an early interest in technology and computer science through coursework and additional training.",
        
      ],
    },
    {
      title: "Nabagram Vidyapith",
      company_name: "Konnagar",
      icon: vidyapith,
      iconBg: "#E6DEDD",
      date: "April 2019 - March 2021",
      points: [
        "Scored 83.6% in the 12th-grade board examinations",
        "Chose Computer Science as an additional subject in higher secondary education, furthering knowledge in programming and computational thinking.",
        "Learned C as the first programming language, building a strong foundation in programming concepts and problem-solving.",
        
      ],
    },
    {
      title: "Netaji Subhash Engineering College",
      company_name: "Kolkata",
      icon: nsec,
      iconBg: "#383E56",
      date: "June 2021 - Present",
      points: [
        "ppeared for the WBJEE and secured a rank of 12,270",
        "Secure top spot in the Internal Smart India Hackathon (SIH) 2023",
        "Completed the AWS Academy Cloud Foundations course and earned certification, gaining foundational knowledge in AWS services and cloud computing.",
        "Experienced in full stack development with proficiency in HTML, CSS, JavaScript, React, Node.js, Express.js, MySQL, MongoDB, Docker, and Git.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Collaborative and enthusiastic developer based in Kolkata, passionate about creating innovative solutions.",
      name: "Riddhi Mondol",
      designation: "CFO",
      company: "Acme Co",
      image: riddhi,
      link: "https://www.linkedin.com/in/riddhi-mondal-659b91222/"
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about his projects like Mayukh does.",
      name: "Anik Adhikari",
      designation: "COO",
      company: "DEF Corp",
      image: anik,
      link: "https://www.linkedin.com/in/anikadhikari/"
    },
    {
      testimonial:
        "Highly cooperative and always open to listening, valuing diverse perspectives and fostering effective communication.",
      name: "Rudranil Bhattacharjee",
      designation: "",
      company: "",
      image: rudra,
      link: "https://www.linkedin.com/in/rudranilbhattacharjee/"
    },
    {
      testimonial:
        "Mayukh's incredible typing speed shines in coding and Valorant, showcasing his technical and gaming prowess.",
      name: "Sourik Roy",
      designation: "",
      company: "",
      image: sourik,
      link: "https://www.linkedin.com/in/sourik-roy-0755561b1/"
    },
    {
      testimonial:
        "An enthusiastic developer who collaborates well and values different perspectives in every project.",
      name: "Sourav Ghorai",
      designation: "",
      company: "",
      image: sourav,
      link: "https://www.linkedin.com/in/souravghorai/"
    },
    {
      testimonial:
        "His enthusiasm, collaborative spirit, and fast problem-solving skills makes him a standout developer.",
      name: "Harshit Narayan Trivedi",
      designation: "",
      company: "",
      image: harshit,
      link: "https://www.linkedin.com/in/harshit-narayan-trivedi-75b1a4220/"
    },
  ];
  
  const projects = [
    {
      name: "Study-Notion",
      description:
        "StudyNotion is a fully functional ed-tech platform built using the MERN stack (ReactJS, NodeJS, MongoDB, ExpressJS). It enables users to create, consume, and rate educational content, aiming to deliver a seamless and engaging learning experience. The platform not only makes education more accessible for students but also provides instructors with a space to showcase skills.",
      tags: [
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "expressjs",
          color: "orange-text-gradient",
        },
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: studynotion,
      source_code_link: "https://github.com/Mayukh-Ganguly01/EdtechPlatform",
    },
    {
      name: "Jarvis.AI",
      description:
        "Jarvis is a powerful and interactive virtual assistant developed using Python.Inspired by the AI assistant from the Iron Man movies, Jarvis listens to your commands and performs various tasks to make your daily life easier. From managing your music library to providing weather updates and news, Jarvis is designed to assist you with a wide range of activities.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "white-text-gradient",
        },
        
      ],
      image: jarvis,
      source_code_link: "https://github.com/Mayukh-Ganguly01/JarvisAIAssistant",
    },
    {
      name: "ChatBot",
      description:
        "Auto Reply Chatbot is a Python-based chatbot that automates replies in WhatsApp using the OpenAI API. The chatbot automatically opens WhatsApp from your taskbar, selects the most recent conversation, generates a response using OpenAI, and sends it to the recipient. This tool is designed to streamline communication and provide quick, automated responses.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "openai",
          color: "white-text-gradient",
        },
        
      ],
      image: chatbot,
      source_code_link: "https://github.com/Mayukh-Ganguly01/Autoreply-Chatbot",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };