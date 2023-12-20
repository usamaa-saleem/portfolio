/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Usama ",
  title: "Hi all, I'm Usama",
  subTitle: emoji(
    "An ardent Full Stack & AI Developer 🚀 having an experience of developing Artificially Intelligent Web and Mobile applications with JavaScript, Python and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PvJiJ8ZMe3lYJTkslF1iCDJcKFbI8Nwx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/usamaa-saleem",
  linkedin: "https://www.linkedin.com/in/usamaasaleem/",
  gmail: "usamaa.saleeem@gmail.com",
  facebook: "https://www.facebook.com/somie.20/",
  twitter: "https://www.twitter.com/somieee20/",
  instagram: "https://www.instagram.com/somie.ai/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Craft state of the art workflows for stable diffusion models, develop optimized codes for txt2img, img2img, txt2video inferences."
    ),
    emoji(
      "⚡ Design, develop, and implement novel computer version algorithms for unique use cases using deep learning frameworks such as TensorFlow, Keras, PyTorch, Caffe etc."
    ),
    emoji("⚡ Develop interactive Frontend / User Interfaces for your web and mobile applications."),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean / Azure."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "National University of Computer and Emerging Sciences",
      logo: require("./assets/images/unilogo.69feb01f.png"),
      subHeader: "Bachelor of Science in Artificial Intelligence",
      duration: "September 2019 - May 2023",
      desc: "Participated in the research of NLP techniques (LSTM) and published 1 paper.",
      descBullets: [
        "Dean's List scross 3 semesters.",
        "Courses: Computer Vision, Natural Language Procesing, Artificial Neural Networks, Machine Learning, Data Structures, Artificial Intelligence, DevOps, Programming for AI, Object Oriented Programming, Design & Analysis of Algorithms.",
        "Secretary General - Fast Artificial Intelligence and Data Science Society",
        "GSDC - Techincal Lead"
      ]
    },
    {
      schoolName: "Fauji Fertilizer Higher Secondary School - FGS",
      logo: require("./assets/images/FGS.55160e10.png"),
      subHeader: "O/A Levels - Cambridge",
      duration: "September 2014 - July 2019",
      desc: "Top Scoring Computer Science student for O/A Levels & Best Athlete winner for 4 straight years 2015-2019",
      descBullets: [
        "A* in Computer Science (A Levels)",
        "3A* 3A 2B in O Levels",
        "Best Badminton Player 2016-2019",
        "Deputy Head Boy"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Product Management", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Imagine AI",
      projectDesc: "AI Art generator using diffusers",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.imagine.art/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Photosoft AI",
      projectDesc: "AI Art generator using ComfyUI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://photosoft.ai/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "StoryQuilt AI",
      projectDesc: "B2B solution for developing LLM's and SD Models.",
      footerLink: [
        {
          name: "Confidential",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "DreamHome AI",
      projectDesc: "Modernsize your home interior using AI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.graana.com/pages/ai"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      // image: require("./assets/images/nextuLogo.webp"),
      projectName: "Genfair AI",
      projectDesc: "AI automated tool for product and model photography using stable diffusion.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://genfair.ai/"
        }
      ]
    }
  ],
  
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "Selected as Google Code-in Finalist from 3500 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "AWS Certified - Cloud Practitioner",
      subtitle:
        "Completed my first foundational certification from AWS Academy as a Cloud Practitioner - Foundational.",
      image: require("./assets/images/AWS.25ede0a6.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification Badge",
          url: "https://www.credly.com/badges/13276efc-5de9-41db-9137-a08422e0a7d9"
        }
      ]
    },

    {
      title: "1st Position in MLH - 2022 Season",
      subtitle: "Performed data visualization using Python, Tableau and Sisense on pandemic data to classify trends of rising pandemic outbreak based on geo-location and created a mobile application that monitored nearby vaccine stations and informed the users about the availability of vaccine in the stations",
      image: require("./assets/images/MLH.6466335b.jpg"),
      imageAlt: "PWA Logo",
      footerLink: [
        {
          name: "Competition Link",
          url: "https://mlh.io/seasons/2022/events"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@somie.20/amazon-web-services-aws-is-the-worlds-most-comprehensive-and-broadly-adopted-cloud-platform-f2b327f026b2",
      title: "Finch: An Open-Source Client for Container Development",
      description:
        "Finch is another command line client for building, running, and distributing Linux containers."
    },
    {
      url: "https://medium.com/@somie.20/amazon-web-services-aws-is-the-worlds-most-comprehensive-and-broadly-adopted-cloud-platform-f2b327f026b2",
      title: "Container D for your compatibility",
      description:
        "A container runtime is essentially a component that mounts the container and interacts with the OS Kernel to begin the 'containerization process'."
    },
    {
      url: "https://medium.com/@somie.20/sigstore-sign-differently-5d49e1f4e4b4",
      title: "Sigstore - Sign differently",
      description:
        "Sigstore enables program developers to safely sign programming antiques, for example, coding artifacts, code pictures, parallels, bill of material manifests and that's just the beginning."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3367295432",
  email_address: "usamaa.saleeem@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  bigProjects,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
