import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Daxone.shop',
        description: "I developed Daxone, an end-to-end E-commerce platform with features like user authentication (OTP and Google), product management, cart functionality, order processing, and user profiles. Built with Bootstrap, Node.js, Express.js, and MongoDB, it includes secure JWT authentication, Razorpay for checkout, and is deployed on AWS EC2 with Nginx for scalability. Chart.js provides detailed business insights through reports and dashboards.",
        tools: ['Express', 'MongoDB', 'Template Engine ', 'AWS ', 'Node Mailer', 'Puppeteer', 'EC2', 'PM2', 'Nginx','cropper js '],
        role: 'Full stack developer',
        code: '',
        demo: '',
        // image: crefin,
    },
    {
        id: 2,
        name: 'React cart-management',
        description: 'A React-based cart management website using Redux for state management. It allows users to add, update, and remove products (keyboards) from the cart with dynamic quantity adjustments. The project features seamless navigation between Home and Cart pages, demonstrating efficient handling of CRUD operations.',
        tools: ["React, Redux, React Router, JavaScript, HTML, CSS"],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        // image: travel,
    },
    {
        id: 3,
        name: 'Ticket Booking System',
        description: 'Developed a React-based ticket booking website with a calendar interface. Users can select a date and choose seats, with available seats displayed in green and booked seats turning red. State management is handled using Redux Toolkit, allowing for efficient booking, seat selection, and persistence of data across sessions. The system includes functionality for selecting, booking, and resetting seats, with bookings stored based on the selected date.',
        tools: ['React, Redux, Redux Toolkit, JavaScript, CSS'],
        code: '',
        role: 'Frontend Developer',
        demo: '',
        // image: realEstate,
    },
    {
        id: 4,
        name: 'User Management System',
        description: " Developed a full-stack CRUD application with user management, utilizing MongoDB for storing and managing user data. Implemented secure user authentication for login, registration, and password updates, while ensuring efficient data storage and validation through MongoDB's data modeling and query capabilities",
        tools: ["MongoDB, Node.js, Express.js, JavaScript, HTML, CSS"],
        code: '',
        demo: '',
        // image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },