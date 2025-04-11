import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Terra",
  lastName: "Infinity",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Web3 Developer",
  role2: "Yogi",
  role_general: "Technologist",
  avatar: "/images/avatar.jpg",
  og_background: "images/gallery/img-14.jpg",
  location: "America/Vancouver", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      ...for occasional updates on my latest content and projects.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/TerraInfinity",
    key: "github"
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/terrainfinity",
    key: "linkedin"
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/BambiCloudPod",
    key: "x"
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:career@terrainfinity.ca",
    key: "email"
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work and creative energies as a ${person.role} and ${person.role2}`,
  headline: <><InlineCode style={{ color: '#F0D4F1' }}>{person.role_general}</InlineCode></>,
  subline: (
    <>
      I am  <InlineCode style={{ color: 'lime' }}>Terra</InlineCode>,
      <br /> 
      A <InlineCode style={{ color: 'violet' }}>Full Stack Web3 Developer</InlineCode > from <a href="https://metana.io/" target="_blank" rel="noopener noreferrer"><InlineCode style={{ color: 'lightblue' }}>Metana</InlineCode></a> and <a href="https://kundaliniresearchinstitute.org/" target="_blank" rel="noopener noreferrer"><InlineCode style={{ color: 'white' }}>KRI</InlineCode></a> Certified Kundalini Yoga Teacher.
      <br />
      Welcome to my professional portfolio.
      <br />
      <hr style={{ border: "none", height: "1px", backgroundColor: "gray", opacity: 0.2, filter: "blur(1px)" }} />
      <span style={{ color: '#A0A0A0' }}>By day, I build and deploy systems and technological solutions.</span> 
      <br />
      <span style={{ color: '#707070' }}>By night... I defend Gotham with my creative educational yogic audio/video content and their associated technical projects and dream of becoming AI.<img src="https://cdn3.emoji.gg/emojis/8582-batman-derp.png" width="28px" height="28px" alt="batman_derp" style={{ verticalAlign: 'middle', display: 'inline' }} /> </span>
      <br />
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/terrainfinity",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      <p>
        I'm Terra, a Vancouver-based <InlineCode>technologist</InlineCode> passionate about simplifying the complex, automating the mundane, and building high-quality technological solutions.
      </p>

      <p>
        As a multidimensional architect of innovation, I craft creative, scalable solutions as a <InlineCode>Full Stack Web3 Developer</InlineCode>, harnessing decentralized technologies to shape tomorrow's possibilities. With a rich background in delivering <InlineCode>DevOps</InlineCode> solutions and guiding <InlineCode>IT management</InlineCode>, I thrive at the intersection of technology and imagination.
      </p>

      <p>
        I'm deeply curious about the evolving landscape of innovation—where tools like <InlineCode>AI</InlineCode> amplify my learning—while always grounding my work in truth and ethics. I explore the intricate tapestry of mind, consciousness, and systems (physiological, technological, and societal), unraveling their philosophies with depth and wonder.
      </p>

      <p>
        As an <InlineCode>educator</InlineCode> and advocate, I channel a heartfelt passion for self-expression, guiding those who seek transformative wisdom. Driven by a vision of a harmonious, utopian future, I forge platforms and communities through original content, empowering others to discover themselves and co-create that shared destiny.
      </p>

      <p>
        I'm ever-evolving, embracing my imperfections and refining my character to rise into the leadership and responsibilities ahead.
      </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: <a href="https://ctrl-alt-delete.ca" target="_blank" rel="noopener noreferrer">CONTROL ALT DELETE</a>,
        timeframe: "Jan 2021 - Nov 2024",
        role: "Senior Technician",
        achievements: [
          <>Oversaw ticket management for a team of technicians, assigning T1 and T2 tickets and training new staff to ensure efficient resolution of client IT issues.</>,
          <>Managed IT services for 100+ clients across healthcare, finance, legal, and real estate sectors, supporting diverse systems including Windows, Linux, macOS, and cloud-based environments.</>,
          <>Maintained and upgraded server infrastructure using Hyper-V virtualization, implementing network enhancements, backup solutions, and security measures like firewalls and antivirus.</>,
          <>Developed PowerShell and batch scripts and used Datto RMM to automate routine tasks, integrating AI tools for troubleshooting and optimizing workflows across client networks.</>,
          <>Provided comprehensive IT support, from day-to-day office operations to backend system administration, ensuring reliability and performance for small to large businesses.</>
        ],
        images: []
      },
      {
        company: <a href="https://theimprovcentre.ca" target="_blank" rel="noopener noreferrer">THE IMPROV CENTRE</a>,
        timeframe: "Jan 2021 - Sept 2024",
        role: "Bartender (Part-Time/Casual)",
        achievements: [
          <>Thrived under pressure, serving drinks and managing intoxicated patrons during busy improv comedy shows, ensuring a clean and welcoming environment.</>,
          <>Coordinated with a team of 2-3 bartenders to balance responsibilities, delivering efficient service during high-traffic intermissions.</>,
          <>Brought a vibrant personality to the role, enhancing guest enjoyment with humor and adaptability in a fast-paced, dynamic setting.</>
        ],
        images: []
      },
      {
        company: <a href="https://clubsupportinc.com" target="_blank" rel="noopener noreferrer">CLUB SUPPORT INC</a>,
        timeframe: "Oct 2020 - Jan 2021",
        role: "Technical Support",
        achievements: [
          <>Delivered Tier 1/2 technical support for resorts and luxury clubs, resolving complex IT issues across servers, networks, and applications.</>,
          <>Supported operational continuity for high-end clients, leveraging ticketing systems and troubleshooting expertise in a fast-paced MSP environment.</>
       ],
        images: []
      },
      {
        company: <a href="https://aspiraconnect.com" target="_blank" rel="noopener noreferrer">ASPIRA</a>,
        timeframe: "Jan 2018 - Jan 2019",
        role: "Client Application Specialist",
        achievements: [
          <>Resolved client software issues for a campground management system via ticketing and phone support, enhancing reliability and user satisfaction.</>,
          <>Configured and maintained rule-based access control policies, tailoring fee schedules and booking rules for diverse campground services.</>,
          <>Provided technical support for software setup, training, and hardware integration, ensuring seamless operations for clients.</>,
          <>Collaborated with sales to manage refunds and deliver client-focused solutions in a high-volume call environment.</>
        ],
        images: []
      },
      {
        company: <a href="https://www.bcit.ca" target="_blank" rel="noopener noreferrer">BCIT</a>,
        timeframe: "Jan 2017 - Jan 2018",
        role: "IT Services Intern",
        achievements: [
          <>Deployed and maintained computer lab systems, performing updates and inventory management to ensure operational reliability.</>,
          <>Installed and troubleshot audio-visual systems, including projectors and wiring, for classrooms, boardrooms, and lecture halls.</>,
          <>Worked alongside A/V Services to construct and cable new tech-enabled campus structures and learning spaces.</>
        ],
        images: []
      },
      {
        company: <a href="https://www.vernontechnology.com" target="_blank" rel="noopener noreferrer">VERNON TECHNOLOGY SOLUTIONS</a>,
        timeframe: "Jan 2013 - Jan 2015",
        role: "Computer Technician",
        achievements: [
          <>Imaged and reimaged computers and AV equipment for rental clients, installing custom software to meet unique event and project needs.</>,
          <>Managed inventory, packaging, and shipping logistics for IT and AV rentals, supporting film industries, hotels, and convention events.</>,
          <>Maintained and optimized internal systems as a warehouse technician, enhancing team productivity in a small, fast-paced environment.</>              
        ],
        images: []
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: <a href="https://metana.io" target="_blank" rel="noopener noreferrer">Metana</a>,
        timeframe: "Jan 2025 - Sep 2025",
        study: "Full Stack Web3 Developer",
        description: [
          <>Mastered React, JavaScript, TypeScript, Node.js with Express, Next.js, and PostgreSQL, building full-stack applications with scalable database solutions.</>,
          <>Implemented CI/CD pipelines using GitHub Workflows and deployed projects with Docker across AWS, Vercel, Fleek, and GitHub Pages hosting platforms.</>,
          <>Designed intuitive UI/UX with Figma and responsive layouts using Tailwind CSS, enhancing user experience in demo apps and a personal portfolio website.</>,
          <>Developed an original content management app to host creative media, integrating modern web technologies with Web3 concepts like Solidity smart contracts.</>,
          <>Collaborated on a full-stack web development group capstone project using agile methodologies.</>,
          <>Explored Web3 technologies, including Solidity smart contracts, NFTs, DeFi protocols, and blockchain innovations, as part of the course curriculum.</>
         ],
      },
      {
        name: <a href="https://www.yogawest.ca/" target="_blank" rel="noopener noreferrer">Yoga West</a>,
        timeframe: "Oct 2022 - May 2023",
        study: "Level 1 & Level 2 Kundalini Yoga Teacher",
        description: [
          <>Embodied Kundalini Yoga as a sacred science of breath, mantra, and meditation, awakening mindfulness and self-awareness to unite the finite self with the infinite consciousness.</>,
          <>Cultivated life mastery through disciplined practice, sharpening critical discernment, emotional equilibrium, and the grace to navigate challenges with clarity—qualities that empower the entrepreneurial spirit.</>,
          <>Refined the art of conscious speech and righteous action, aligning with the soul's integrity to create harmony and upliftment in all interactions, even amidst the storms of high-pressure environments.</>,
          <>Mastered the alchemy of stress into strength, forging deep compassion and empathetic presence, enabling leadership that radiates calm authority and inspires trust.</>,
          <>Journeyed into the vastness of the mind through direct experience, transcending ego's illusions to embrace the radiant truth of being—infusing vitality, focus, and purpose into both worldly endeavors and inner growth.</>
        ],
      
      },
      {
        name: <a href="https://www.bcit.ca/programs/computer-systems-technology-diploma-full-time-5500dipma" target="_blank" rel="noopener noreferrer">British Columbia Institute of Technology (BCIT)</a>,
        timeframe: "2016 - 2018",
        study: "Computer Systems Technology - Cloud Computing",
        description: [
          <>Gained proficiency in core computer science skills, including Python, Java, JavaScript, C, C++, C#, SQL, Linux, HTML, CSS, and PHP through foundational programming and web development courses.</>,
          <>Explored relational databases and system design principles, applying them to practical software development projects.</>,
          <>Focused on cloud computing in the second year—part of Canada's first technical college diploma in the field—mastering AWS, Azure, Google Cloud, and DevOps practices for scalable solutions.</>,
          <>Strengthened technical and analytical abilities with coursework in business communications and applied mathematics, enhancing problem-solving and collaboration skills.</>,
          <>Explored Agile methodologies in group projects, fostering teamwork, adaptability, and iterative development practices.</>
        ],
      },
      {
        name: <a href="https://www.bcit.ca/programs/computer-information-systems-administration-diploma-full-time-1930dipma/" target="_blank" rel="noopener noreferrer">British Columbia Institute of Technology (BCIT)</a>,
        timeframe: "2011 - 2013",
        study: "Computer Information Systems Administration - Network Systems",
        description: [
    <>Mastered system administration with Active Directory, Red Hat Linux, CentOS, DNS, and DHCP, configuring servers and network racks for optimal performance.</>,
    <>Developed hands-on expertise with Cisco devices, including Cisco ASA firewalls, and advanced TCP/IP, aligning with CCNA-focused networking principles.</>,
    <>Explored virtualization technologies and hardware configuration, building and managing scalable, secure network infrastructures.</>,
    <>Strengthened network security and troubleshooting skills, integrating firewalls and server management to ensure robust, reliable systems.</>
  ],
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma for web design.</>,
        images: [],
      },
      {
        title: "Full Stack Development",
        description: <>Building end-to-end web applications with expertise in frontend frameworks like Next.js, React, and Vue, and backend technologies such as Node.js, Python, Java, and PHP, along with proficiency in JavaScript, TypeScript, and HTML5.</>,
        images: [],
      },
      {
        title: "Databases",
        description: <>Managing relational databases including PostgreSQL and SQL for robust data storage and retrieval.</>,
        images: [],
      },
      {
        title: "Cloud Computing",
        description: <>Deploying and managing scalable cloud infrastructure on Amazon Web Services (AWS), Google Cloud Platform (GCP), and Microsoft Azure.</>,
        images: [],
      },
      {
        title: "Infrastructure and DevOps",
        description: <>Configuring and maintaining server environments (Linux, Windows, Cisco Servers), containerization with Docker, and optimizing system performance across various platforms including Mac, iPad, and tablets.</>,
        images: [],
      },
      {
        title: "Networking and Security",
        description: <>Managing enterprise networks with Active Directory, configuring networking hardware like routers, switches, and printers, implementing network security protocols, and handling DNS management.</>,
        images: [],
      },
      {
        title: "Blockchain Development",
        description: <>Writing secure smart contracts with Solidity, designing decentralized applications, and integrating Web3.js for blockchain interactions.</>,
        images: [],
      },
      {
        title: "Programming Languages",
        description: <>Developing efficient applications and scripts with a versatile skill set including Python, Java, C++, C, and C#.</>,
        images: [],
      },
      {
        title: "Agile Methodologies",
        description: <>Applying Agile practices to streamline project management and enhance team collaboration.</>,
        images: [],
      },
      {
        title: "Entrepreneurship",
        description: <>Leveraging entrepreneurial skills to drive innovation and business growth in technology projects.</>,
        images: [],
      },
      {
        title: "Soft Skills and Personal Development",
        description: <>Enhancing team dynamics and personal effectiveness through conscious communication, teaching, meditation, mindfulness practices, Kundalini Yoga, and breath work.</>,
        images: [],
      },
      {
        title: "Specialized Knowledge",
        description: <>Applying insights from psychology and philosophy of the mind, physiology, and addiction recovery to inform user-centered design and tech solutions.</>,
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Professional rants and ravings.",
  description: (
    <span style={{ display: "inline" }}>
      Take a look at {person.name}'s creative writings about Consciousness, Yoga, Psychology, Politics, AI, Innovation, Tech projects, and...{" "}
      <span className="blurred" title="Ethical Hypnotic Eroticism" style={{ fontSize: '0.5em' }}>
        Ethical Hypnotic Eroticism to heal toxic masculinity/femininity.
      </span>
    </span>
  ),// Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-15.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-16.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-17.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-18.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-19.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-20.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-21.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-22.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-23.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-24.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-25.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-26.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-27.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-28.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-29.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-30.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-31.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-32.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-33.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
