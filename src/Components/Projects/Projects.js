import React from 'react';
import Project from './../Project/Project';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    img: 'https://i.ibb.co/Sc4DKqD/all-devices-black-1.png',
    name: '❖ Sky Cloud - A drone selling shop',
    date: 'Nov 2021 - Nov 2021',
    website: 'https://sky-cloud-drone.web.app/',
    frontendGit: 'https://github.com/KawsarRobin/Sky-cloud-client-side',
    backendGit: 'https://github.com/KawsarRobin/Sky-cloud-server-side',
    linkedin: 'https://www.linkedin.com/in/kawsar-robin/',
    des: [
      '➣ Drone selling website including Login Authentication and dashboard for users and admin.',
      '➣ Users can Place orders, Post reviews, and Track orders & updates in the dashboard.',
      '➣ Admins have the ability to add new products, remove existing products, remove user products, update shipping status, and create new admin accounts.',
      '➣ Reviews are dynamic.',
    ],
    Technology: [
      '#REACT_BOOTSTRAP',
      '#JS',
      '#React',
      '#Aso',
      '#React router',
      '#Heroku',
      '#Firebase',
      '#Node JS',
      '#Node Express',
      '#MongoDB',
    ],
  },
  {
    id: 2,
    img: 'https://i.ibb.co/qDSpxX7/all-devices-black-2.png',
    name: '❖ Book & Travel - Best Travel Agency',
    date: 'Nov 2021 - Nov 2021',
    website: 'https://book-and-travel-cd69c.web.app/',
    frontendGit: 'https://github.com/KawsarRobin/book-and-travel-client-side',
    backendGit: 'https://github.com/KawsarRobin/book-and-travel-server-side',
    linkedin: 'https://www.linkedin.com/in/kawsar-robin/',
    des: [
      '➣ Travel Services website along with Admin panel to Manage Services and Bookings.',
      '➣ Users can book services from the service list and will be able to track those bookings.',
      '➣ Only an Admin can Launch new Services, Manage All Orders like Approve or Delete them.',
      '➣ Reviews are dynamic.',
    ],
    Technology: [
      '#BootStrap',
      '#JS',
      '#React',
      '#React router',
      '#React reveal',
      '#Heroku',
      '#Firebase',
      '#Node JS',
      '#Node Express',
      '#MongoDB',
    ],
  },
  {
    id: 3,
    img: 'https://i.ibb.co/7YsYvwX/all-devices-black-3.png',
    name: '❖ Doctery - Medical & Health Care Services',
    date: 'Oct 2021 - Oct 2021',
    website: 'https://doctery-4f0d8.web.app/',
    frontendGit: 'https://github.com/KawsarRobin/Doctery-React',
    linkedin: 'https://www.linkedin.com/in/kawsar-robin/',
    des: [
      '➣ A fully functional dynamic responsive website',
      '➣ User can see his name and profile picture in the header after SignIn with Google.',
      '➣ Navigate different pages is possible through navbar without reloading.',
    ],
    Technology: [
      '#Html5',
      '#Css3',
      '#BootStrap',
      '#JS',
      '#React',
      '#React router',
      '#Firebase',
    ],
  },
  {
    id: 4,
    img: 'https://i.ibb.co/2S4m3vP/all-devices-black-4.png',
    name: '❖ Apple Shop - Best Computer Accessories Shop',
    date: 'July 2021 - July 2021',
    website: 'https://macbook-pro-assignment-no-5.netlify.app/',
    frontendGit: 'https://github.com/KawsarRobin/MacBook-Pro-Js--A-5',
    linkedin: 'https://www.linkedin.com/in/kawsar-robin/',
    des: [
      '➣  This was my very first Dom Manipulation interaction using HTML5, CSS3, Bootstrap and JavaScript',
      '➣ Used Vanila Js for interaction on different choices',
      '➣ Amzging UI exprience',
    ],
    Technology: ['#HTML5', '#CSS3', '#BootStrap', '#JavaScript'],
  },
  {
    id: 5,
    img: 'https://i.ibb.co/3mbq7xd/hondaCBR.png',
    name: '❖ Honda CBR - Best Bike Accessories Shop',
    date: 'July 2021 - July 2021',
    website: 'https://kawsarrobin.github.io/Honda-CBR/index.html',
    frontendGit: 'https://github.com/KawsarRobin/Honda-CBR',
    linkedin: 'https://www.linkedin.com/in/kawsar-robin/',
    des: [
      '➣  This was my very first static responsive website focused on UI using HTML5, CSS3, Bootstrap and JavaScript',
      '➣ Used fancy carousel & hosted on netlify',
      '➣ Amzging UI exprience',
    ],
    Technology: ['#HTML5', '#CSS3', '#BootStrap', '#JavaScript'],
  },
];
const Projects = () => {
  return (
    <div id="projects">
      <h2 className="text-start pb-5 mb-5 container">Some of My projects_</h2>
      {projectsData.map((project) => (
        <Project key={project.id} project={project}></Project>
      ))}
    </div>
  );
};

export default Projects;
