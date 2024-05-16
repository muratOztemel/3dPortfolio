import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  react,
  redux,
  tailwindcss,
  typescript,
} from "../assets/icons";
import restapi from "../assets/icons/restapi.svg";
import freelancer from "../assets/icons/freelancer.svg";
import gittigidiyor from "../assets/icons/GittiGidiyor.svg";

export const skills = [
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  {
    imageUrl: restapi,
    name: "RestApi",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },

  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Front-end React Developer",
    company_name: "Freelancer",
    icon: freelancer,
    iconBg: "#ffffff",
    date: "May 2022 - Present",
    points: [
      "I have worked with multiple companies remotely as a Freelancer.",
      "Created dynamic user interfaces using React. ",
      "Experienced different industry areas such as e-commerce, health, foods and delivery.",
      "Focused on reusability of the components.",
      "Performance based optimization.",
      "Understandable, quick and easy maintainable coding. ",
      "State management with Redux and Redux Toolkit.",
      "Unit test with Jest.",
      "Used Github, Gitlab and TFS for source control.",
    ],
  },
  {
    title: "Front-end React Developer",
    company_name: "Gittigidiyor",
    icon: gittigidiyor,
    iconBg: "#ffffff",
    date: "Aug 2016 - May 2022",
    points: [
      "Products frontend development with react.js.",
      "Portfolyo page design with bootstrap.",
      "Implementing Tailwind.css .",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Sanalpazar",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Jan 2022 - Jan 2023",
    points: [
      " worked on the management panel of the company's e-commerce site, the effective communication experience with users, and the development and editing of pages.",
    ],
  },
  {
    title: "IT Department",
    company_name: "Interbil Media Group",
    icon: freelancer,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Present",
    points: [
      "Management of the websites of magazines, economy and sports magazines within the company. I was responsible for ensuring the maintenance, security and network control of computers within the company.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/muratOztemel",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/muratoztemel/",
  },
];

export const projects = [
  {
    iconUrl: freelancer,
    theme: "btn-back-red",
    name: "Doctor Appointment",
    description: `The React Doctor Appointment project is a comprehensive web application designed to streamline the process of booking and managing medical appointments. This project caters to various roles, including Users, Admins, Doctors, Nurses, and Patients, each having their own dedicated dashboards.

Features:

User Authentication: Secure login and registration for different roles.
Role-Based Dashboards: Customized interfaces for Admins, Doctors, Nurses, and Patients.
Appointment Scheduling: Easy-to-use interface for booking and managing appointments.
Patient Management: Detailed patient records and history accessible to authorized medical staff.
Notification System: Alerts and reminders for upcoming appointments.
Multi-language Support: Options for Turkish and English languages.
Responsive Design: Ensures a seamless experience across all devices.
Advanced Search Filters: Filter by country, language, and other criteria to find suitable medical professionals.
Technologies Used:

Frontend: React, Redux Toolkit, RTK Query, Tailwind CSS
Backend: Node.js, Express.js (optional)
Database: MongoDB (optional)
Authentication: Firebase or custom JWT-based authentication
This project aims to provide a user-friendly and efficient platform for managing doctor appointments, enhancing the overall patient experience and operational efficiency of medical facilities.`,
    link: "https://github.com/muratOztemel/doctorAppointment",
  },
];
