"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./Card/ProjectCard";
import ProjectTag from "./Tag/ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Needle",
    description: "Unravel your tasks",
    image: "/projects/needle.png",
    tag: ["All", "MacOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Expresso",
    description: "Improve your productivity",
    image: "/projects/expresso.png",
    tag: ["All", "MacOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "T-Numbers",
    description: "Help kids with vision problems to learn the numbers",
    image: "/projects/t-numbers.png",
    tag: ["All", "iOS", "MacOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Hellcife",
    description: "Save mofia of the circles of the Hell",
    image: "/projects/Hellcife.png",
    tag: ["All", "iOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Ecopiticos",
    description: "help the environment",
    image: "/projects/ecopitico.png",
    tag: ["All", "iOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Ticket",
    description: "What's the next movie you are gonna watch?",
    image: "/projects/Ticket.png",
    tag: ["All", "iOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Sommelier",
    description: "What's your next drink?",
    image: "/projects/sommelier.png",
    tag: ["All", "iOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Tick Tack Old",
    description: "Out of paper? Bored? No problem. All you need to play this game is on you wrist.",
    image: "/projects/tictacold.jpeg",
    tag: ["All", "WatchOs"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 9,
    title: "Skin Scanner",
    description: "Too much sun? Check if your skin is ok. ",
    image: "/projects/sun.png",
    tag: ["All", "iOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 10,
    title: "Universe",
    description: "Learn more about the universe",
    image: "/projects/universe.png",
    tag: ["All", "iOS"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const Projects = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="MacOS"
          isSelected={tag === "MacOS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="iOS"
          isSelected={tag === "iOS"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="WatchOS"
          isSelected={tag === "WatchOS"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;