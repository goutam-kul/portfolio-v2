import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Whomai() {
    const [showWhoami, setShowWhoami] = useState(false); 

    useEffect(() => {
        const timer = setTimeout(() => setShowWhoami(true), 500);
        return () =>  clearTimeout(timer);
    }, []);

    return (
        <motion.div
            className="mt-4"
            initial={{ opacity:0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <p className="mb-4">
                <span className="text-accent font-bold">goutam@kul</span>
                <span className="text-success font-bold">:~</span>
                <span className="text-accent font-bold">$</span>
                <span className="text-white"> whoami</span>
            </p>

            {showWhoami && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-2 ml-4"
                >
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-accent"
                    >
                        Hello, I'm <span className="font-semibold">Goutam Munda</span>.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-accent"
                    >
                        I am a software engineer from India, specializing in <span className="font-semibold">
                        Backend</span> development and <span className="font-semibold">Machine Learning </span> applications.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-accent"
                    >
                        <span className="text-gray-400"># Passionate about building new features and applications.</span>
                    </motion.p>
                </motion.div>
            )}
        </motion.div>
    );

}
