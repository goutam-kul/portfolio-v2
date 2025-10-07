import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Skills() {
    const [showSkills, setShowSkills] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowSkills(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const skills = [
        {
            name: "Machine Learning",
            technologies: ["Scikit-Learn","TensorFlow", "Pytorch"],
        },
        {
            name: "Frontend Development",
            technologies: ["JavaScript", "React", "Tailwind"]
        },
        {
            name: "Backend Development",
            technologies: ["Nginx", "FastAPI", "Docker", "Kubernetes"],
        },
        {
            name: "Database",
            technologies: ["PostgreSQL", "MySQL", "Redis"],
        },
    ];

    return (
        <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="mb-4">
                <span className="text-accent font-bold">goutam@kul</span>
                <span className="text-success">:~/skills</span>
                <span className="text-accent">$</span>
                <span className="text-white"> ./showskills</span>
            </p>

            {showSkills && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }} 
                    className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15, type: "spring", stiffness: 120 }}
                            className="p-4 border border-gray-700 rounded-xl"
                        >
                            <h3 className="text-accent font-semibold text-lg mb-2">{skill.name}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-xs bg-[#24283b] text-white/90 px-2 py-1 rounded-md border border-gray-600 hover:border-accent transition-all duration-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </motion.div>
    );
}
