import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Contact() {
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowContact(true), 500);
        return () => clearTimeout(timer);
    })

    const socials = [
        {
            name: "Email",
            href: "mailto:goutammunda3134@gmail.com",
            icon: <Mail size={18} />,
            color: "text-warning",
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/goutam-munda",
            icon: <Linkedin size={18} />,
            color: "text-accent",
        },
        {
            name: "Github",
            href: "https://www.github.com/goutam-kul",
            icon: <Github size={18} />,
            color: "text-success",
        }
    ]

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mt-4"
        >
            <p className="mb-4">
                <span className="text-accent font-bold">goutam@kul</span>
                <span className="text-success">:~</span>
                <span className="text-accent">$</span>
                <span className="text-white"> ssh goutam@192.168.1.7</span>
            </p>

            {showContact && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="ml-6 space-y-3"
                >
                    {socials.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className={`flex items-center gap-2 ${social.color} hover:drop-shadow-[0_0_5px_#7aa2f7] transition-all duration-200`}
                        >
                            {social.icon}
                            <span className="text-white hover:text-accent transition-color">
                                {social.name}
                            </span>
                        </motion.a>
                    ))}
                </motion.div>
                    
            )}

        </motion.div>
    )
}
