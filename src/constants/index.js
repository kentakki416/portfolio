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
  tailwind,
  nodejs,
  go,
  git,
  kubernetes,
  redis,
  mongo,
  docker,
  laravel,
  kubernetesMeetUp,
  shellMeetUp,
  dockerMeetUp,
  calenderGo,
  umarche,
  vuesplash,
  kyutech,
  yagocoro,
  abema,
  pigg,
} from "../assets";

export const navLinks = [
  {
    id: "https://github.com/kentakki416/",
    title: "github",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Enginner",
    icon: web,
  },
  {
    title: "Infra Enginner",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Consultant ",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Golang",
    icon: go,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "redis",
    icon: redis,
  },
  {
    name: "Mongo",
    icon: mongo,
  }
];

const experiences = [
  {
    title: "Start IT Engineer",
    company_name: "Kyushu Institute of Technology",
    icon: kyutech,
    iconBg: "#383E56",
    date: "March 2018 - April 2022",
    points: [
      "learned about software design.",
      "I became interested in programming in a university class and started teaching himself.",
      "I worked as an intern at several companies and as a programming school teacher.",
    ],
  },
  {
    title: "PHP Developer",
    company_name: "YAGOCORO",
    icon: yagocoro,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Feb 2021",
    points: [
      "I was assigned to an actual project for the first time in my life.",
      "The model of the project was becoming bloated, so I carried out the task of introducing a clean architecture.",
    ],
  },
  {
    title: "Go Developer",
    company_name: "Abema",
    icon: abema,
    iconBg: "#383E56",
    date: "Jan 2021 - Jan 2022",
    points: [
      "Learned Go for the first time",
      "I was involved in a video processing service for World Cup video distribution.",
    ],
  },
  {
    title: "Node Developer",
    company_name: "Pigg Party",
    icon: pigg,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Learned about Node.js for the first time",
      "In addition to developing new features, I also perform SRE tasks.",
    ],
  },
];

const blogs = [
  {
    title: "Kubernetes勉強会",
    image: kubernetesMeetUp,
    link: "https://docs.google.com/presentation/d/1YV0gJG1NRvntuu4YhwEei0e_M6MresqFFQmkjS2T7VQ/edit?usp=sharing"
  },
  {
    title: "シェルスクリプト入門",
    image: shellMeetUp,
    link: "https://docs.google.com/presentation/d/1V6_kZ1Bal2-IERIvONnaqyS561z8NBDM5Ct-7rXeFS8/edit?usp=sharing"
  },
  {
    title: "Docker入門",
    image: dockerMeetUp,
    link: "https://docs.google.com/presentation/d/18B3tTEbceDiibOMabBaUnQLs0iu-s_EaKX3_chZ0Ayo/edit#slide=id.g252b4dd921f_0_0"
  },
];

const projects = [
  {
    name: "Calender-Go",
    description:
    "This project was created in imitation of Google Calendar. You'll probably find it indistinguishable from the real thing.",
    tags: [
      {
        name: "go",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
    ],
    image: calenderGo,
    source_code_link: "https://github.com/kentakki416/calender-go",
  },
  {
    name: "laravel8-umarche",
    description:
      "This is a complete e-commerce site, with both an administrator interface and a seller interface, as well as a user interface. The items listed by the sellers can be purchased by users with a credit card.",
    tags: [
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "blade",
        color: "gray-text-gradient",
      },
    ],
    image: umarche,
    source_code_link: "https://github.com/kentakki416/laravel8-umarche",
  },
  {
    name: "vuesplash",
    description:
      "A photo sharing app that imitates a service called Unsplash using laravel and vue",
    tags: [
      {
        name: "php",
        color: "pink-text-gradient",
      },
      {
        name: "vue",
        color: "green-text-gradient",
      },
    ],
    image: vuesplash,
    source_code_link: "https://github.com/kentakki416/vuesplash",
  },
];

export { services, technologies, experiences, blogs, projects };
