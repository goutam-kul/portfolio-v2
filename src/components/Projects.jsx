import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Projects() {
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowProjects(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const projects = [
        {
            name: "Portfolio Website",
            description: "Interactive terminal-style portfolio built with React and Tailwind",
            tech: ["React", "Tailwind", "Framer Motion"],
            link: "https://www.github.com/goutam-kul/portfolio"
        },
        // Add more pojects 
    ];

    return (
        <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
        <p className="mb-4">
            <span className="text-accent font-bold">goutam@kul</span>
            <span className="text-success font-bold">:~/projects</span>
            <span className="text-accent font-bold">$</span>  <span className="text-white">ls</span>
        </p>

        {showProjects && (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                transition={{ duration: 0.3}}
                className="space-y-2"
            >
            {projects.map((project, index) => (
                <motion.div
                    key={project.name}
                    initial={{ opacity: 0, x: -20}}
                    animate={{ opacity: 1, x: 0}}
                    className="pg-2" 
                >
                <h3 className="ml-4 text-accent font-semibold">{project.name}</h3>
                <p  className="ml-4 text-white text-sm">{project.description}</p>
                <div className="ml-4 flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-gray-700 px-2 py-1 rounded">{tech}</span>
                    ))}
                </div>
                <a href={project.link} className="ml-4 text-success text-sm hover:underline mt-1 inline-block" target="_blank">View Project →</a> 
                </motion.div>
            ))}
            </motion.div>
        )}
        </motion.div>

    )

}
