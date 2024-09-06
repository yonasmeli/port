/* // import React, { useState } from 'react';
// import './resume.css';
// import SchoolIcon from '@mui/icons-material/School';
// import HistoryIcon from '@mui/icons-material/History';
// import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';
// import AddchartIcon from '@mui/icons-material/Addchart';
// import ColorLensIcon from '@mui/icons-material/ColorLens';

// function Resume() {
//   const [selectedSection, setSelectedSection] = useState('Education');

//   const sections = {
//     Education: {
//       icon: <SchoolIcon />,
//       content: `
//         **High School**:
//         - School: Hope of the East
//         - Location: Ethiopia
//         - Duration: 2018 - 2021 GC

//         **Evangadi Technology**:
//         - Duration: 2022 - 2024
//         - Description: Studied various technologies and gained practical skills.

//         **Unity University**:
//         - Duration: 2022 - Present
//         - Description: Currently pursuing a degree at Unity University.
//       `,
//     },
//     'Work History': {
//       icon: <HistoryIcon />,
//       content: 'Describe your work experience and roles here.',
//     },
//     Skills: {
//       icon: <LaptopChromebookIcon />,
//       content: 'List your skills and proficiencies here.',
//     },
//     Projects: {
//       icon: <AddchartIcon />,
//       content: 'Showcase your projects and achievements here.',
//     },
//     Interests: {
//       icon: <ColorLensIcon />,
//       content: 'Mention your hobbies and personal interests here.',
//     },
//   };

//   return (
//     <div className="container">
//       <header className="header">
//         <h1>John Doe</h1>
//         <p className="title">Junior Web Developer</p>
//         <p className="contact-info">
//           Email: johndoe@example.com | Phone: (123) 456-7890 | LinkedIn | GitHub | Location
//         </p>
//       </header>

//       <div className="content">
//         <aside className="sidebar">
//           <ul>
//             {Object.keys(sections).map((section) => (
//               <li
//                 key={section}
//                 className={`sidebar-item ${selectedSection === section ? 'selected' : ''}`}
//                 onClick={() => setSelectedSection(section)}
//               >
//                 <span className="icon">{sections[section].icon}</span>
//                 <span className="text">{section}</span>
//               </li>
//             ))}
//           </ul>
//         </aside>

//         <main className="main-content">
//           <h2>{selectedSection}</h2>
//           <p>{sections[selectedSection].content}</p>
//         </main>
//       </div>
//     </div>
//   );
// }

// export default Resume;





































































// body {
//     font-family: 'Roboto', sans-serif;
//     background-color: #f4f4f9;
//     margin: 0;
//     padding: 0;
//     color: #333;
//   }
  
//   .container {
//     width: 80%;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 20px;
//   }
  
//   .header {
//     text-align: center;
//     padding: 20px 0;
//     border-bottom: 1px solid #ccc;
//   }
  
//   .header h1 {
//     margin: 0;
//     font-size: 2.5em;
//   }
  
//   .header .title {
//     margin: 5px 0;
//     font-size: 1.5em;
//     color: #666;
//   }
  
//   .header .contact-info {
//     font-size: 0.9em;
//     color: #888;
//   }
  
//   .content {
//     display: flex;
//     margin-top: 20px;
//   }
  
//   .sidebar {
//     width: 25%;
//     background-color: #fff;
//     border-right: 1px solid #ccc;
//     padding: 20px;
//   }
  
//   .sidebar ul {
//     list-style-type: none;
//     padding: 0;
//   }
  
//   .sidebar-item {
//     display: flex;
//     align-items: center;
//     margin-bottom: 15px;
//     cursor: pointer;
//     padding: 10px;
//     border-radius: 5px;
//     transition: background-color 0.3s;
//   }
  
//   .sidebar-item .icon {
//     /* background-color: #007BFF;
//     background-color: #ff5722; */
//     color: #ff5722;
//     /* border-radius: 50%; */
//     padding: 10px;
//     margin-right: 10px;
//     display: inline-block;
//     text-align: center;
//     width: 40px;
//     height: 40px;
//     line-height: 20px;
//     font-size: 4.2em;
//   }
  
//   .sidebar-item .text {
//     font-size: 1em;
//     color: #333;
//   }
  
//   .sidebar-item.selected,
//   .sidebar-item:hover {
//     background-color: #e6f2ff;
//     background-color: #edc3b6c1;
//   }
  
//   .sidebar-item.selected .icon {
//     background-color: #0056b3;
//     background-color: #fff;
//   }
  
//   .main-content {
//     width: 75%;
//     padding: 20px;
//     background-color: #fff;
//   }
  
//   .main-content h2 {
//     font-size: 1.8em;
//     margin-bottom: 10px;
//     color: #007BFF;
//   }
  
//   .main-content p {
//     font-size: 1em;
//     line-height: 1.6;
//   }
//   /* Styling for the content paragraph */
//   .main-content p {
//     font-size: 1em;
//     line-height: 1.6;
//     margin: 20px 0;
//     white-space: pre-line; /* Preserves new lines in text */
//     color: #333;
//   }
  
//   /* Additional styling for bold text within paragraphs */
//   .main-content p strong {
//     font-weight: bold;
//     color: #007BFF; /* Optional: Customize color for emphasis */
//   }
   