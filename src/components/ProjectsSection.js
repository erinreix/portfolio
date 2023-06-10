import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
 {
   title: "Little Lemon 🍋",
   description: "Restaurant website built using React.",
   url:"https://little-lemon-erinreix.vercel.app/",
   getImageSrc: () => require("../images/photo1.jpg"),
 },
 {
   title: "React Infinite Scroll",
   description:
     "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️", 
   getImageSrc: () => require("../images/photo2.jpg"),
 },
 {
   title: "Photo Gallery",
   description:
     "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income", 
   getImageSrc: () => require("../images/photo3.jpg"),
 },
 {
   title: "Event planner",
   description:
     "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
   getImageSrc: () => require("../images/photo4.jpg"),
 },
 {
  title: "Event planner",
  description:
    "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps", 
  getImageSrc: () => require("../images/photo4.jpg"),
},
];

const ProjectsSection = () => {
 return (
   <FullScreenSection
     justifyContent="center"
     alignItems="center"
     backgroundColor="#06002E"
     isDarkBackground
     p={10}
   >
     <Heading as="h1" id="projects-section" textAlign="center" mb={8}>
       Featured Projects
     </Heading>
     <Box
       display="grid"
       gridTemplateColumns="repeat(4, minmax(0, 1fr))"
       gridTemplateRows="auto auto"
       gridGap={8}
       justifyContent="center"
     >
       {projects.map((project) => (
         <Card
           key={project.title}
           title={project.title}
           description={project.description}
           url={project.url}
           imageSrc={project.getImageSrc()}
         />
       ))}
     </Box>
   </FullScreenSection>
 );
};

export default ProjectsSection;