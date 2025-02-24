import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Collins",
  lastName: "Lekakeny",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/pfp.jpg",
  location: "Nairobi/Kenya", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Swahili"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Get in Touch with {person.firstName}</>,
  description: (
    <>
      Have a question, project idea, or just want to connect? Feel free to reach out, and I'll get back to you as soon as possible.
    </>
  ),
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/lekakenycollins8",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/lekakenycollins8",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/leky_reborn",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:lekakenycollins8@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Engineer</>,
  subline: (
    <>
      I'm Collins, a Software Engineer at <InlineCode>Talent Match Africa</InlineCode>. <br /> I build full-stack applications to API integrations and website development.
      <br /> I thrive on solving complex problems, continuously improving my skills, and helping businesses leverage technology to grow.
      <br /> After hours, I enjoy reading, playing chess and exploring new technologies.
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
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Collins is a Nairobi-based Software engineer with a passion for building scalable web applications, API integrations, and custom software solutions. He runs Creative Duo Digital Solutions, where He designs and develops websites, full-stack apps, and automation tools for businesses. He is also a tech enthusiast, chess player, and a reader.
        <br />
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Talent Match Africa",
        timeframe: "2024 - Present",
        role: "Web developer",
        achievements: [
          <>
            Designed and developed custom software solutions tailored to client requirements, focusing on efficiency, scalability, and user experience.
          </>,
          <>
            Collaborated with clients to gather requirements, provide technical recommendations, and ensure timely delivery of projects.
          </>,
          <>
            Optimized application performance and implemented responsive designs using modern front-end technologies like HTML, CSS, Next.js, React.js, and Tailwind CSS.
          </>,
          <>
           Integrated third-party APIs to enhance application functionality and user engagement.
          </>,
          <>
           Managed multiple projects simultaneously, demonstrating excellent time management and organizational skills.
         </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/kk1.png",
            alt: "Leky Collins Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Kenya Power & Lighting Company",
        timeframe: "Sep, 2021 - Nov, 2021",
        role: "Intern",
        achievements: [
          <>
            Registered and processed claim forms in the company's insurance database.
          </>,
          <>
            Reviewed selected claim files and completed assigned tasks to facilitate claim investigations.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Africa Leadership Experience - Holberton School",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Jaramogi Oginga Odinga University of Science and Technology",
        description: <>Studied Bachelor of Actuarial Science with Information Technology.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Web Development",
        description: <>Able to build end to end custom software solutions in MERN Stack.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "React + Next.js",
        description: <>Building websites with React + Material UI + Tailwind CSS</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "REST APIs",
        description: <>Integrating  third-party RESTful APIs in software solutions</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Version Control(Github)",
        description: <>Ensuring code quality through version control systems (Git, GitHub) and adherence to industry best practices.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Fullstack apps and webdev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
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
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
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
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
