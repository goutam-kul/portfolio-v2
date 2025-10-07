import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Whoami from "./Whoami";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";


const Typerwriter = ({ text, speed = 50, onComplete }) => {
    const [displayText, setDisplayText] = useState("");
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (index < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[index]);
                setIndex(index + 1);
            }, speed);
            return () => clearTimeout(timeout);
        } else if (onComplete) {
            onComplete();
        }
    }, [index, text, speed, onComplete]);

    return <span className="text-white">{displayText}</span>;
};

export default function Greet() {
    const [showWelcomeResponse, setShowWelcomeResponse] = useState(false);
    const [showMeHelpCommand, setShowMeHelpCommand] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);
    const [renderComponent, setRenderComponent] = useState(null);

    const options = ["whoami", "projects", "skills", "contact", "about"];

    const COMMAND_MAP = {
        whoami: <Whoami />,
        projects: <Projects />,
        skills: <Skills />,
        contact: <Contact />
        /*define more*/
    };

    // Show 'me --help' command after welcome response animation completes
    useEffect(() => {
        if (showWelcomeResponse) {
            const timeout = setTimeout(() => setShowMeHelpCommand(true), 1000); // Match welcome fade-in duration
            return () => clearTimeout(timeout);
        }
    }, [showWelcomeResponse]);

    // Handle keyboard navigation for list
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!showOptions) return;
            if (e.key === "ArrowUp" || e.key === "k") {
                e.preventDefault();
                setSelectedOption((prev) => (prev === 0 ? options.length - 1 : prev - 1));
            } else if (e.key === "ArrowDown" || e.key === "j") {
                e.preventDefault();
                setSelectedOption((prev) => (prev === options.length - 1 ? 0 : prev + 1));
            } else if (e.key === "Enter") {
                e.preventDefault();
                setRenderComponent(COMMAND_MAP[options[selectedOption]]);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [showOptions, selectedOption, options]);

    // Handle mouse click
    const handleOptionClick = (index) => {
        setSelectedOption(index);
        setRenderComponent(COMMAND_MAP[options[index]]);
    };

    return (
        <div className="flex p-4 font-mono text-lg">
            <div>
                <p className="mt-4">
                    <span className="text-accent font-bold">goutam@kul</span>
                    <span className="text-success font-bold">:~</span>
                    <span className="text-accent font-bold">$</span>
                    <Typerwriter
                        text=' echo "Welcome to my portfolio!"'
                        onComplete={() => setShowWelcomeResponse(true)}
                    />
                </p>

                {showWelcomeResponse && (
                    <motion.p
                        className="ml-10 mt-2 text-lg font-semibold text-white"
                        initial={{ opacity: 0.0 }}
                        animate={{ opacity: 1.0 }}
                        transition={{ duration: 1.0 }}
                    >
                        Welcome to my portfolio!
                    </motion.p>
                )}

                {showMeHelpCommand && (
                    <p className="mt-4">
                        <span className="text-accent font-bold">goutam@kul</span>
                        <span className="text-success font-bold">:~</span>
                        <span className="text-accent font-bold">$</span>
                        <Typerwriter
                            text=" me --help"
                            onComplete={() => setShowOptions(true)}
                        />
                    </p>
                )}

                {showOptions && (
                    <motion.div
                        className="ml-10 mt-4"
                        initial={{ opacity: 0.0, y: 20 }}
                        animate={{ opacity: 1.0, y: 0 }}
                        transition={{ duration: 1.0 }}
                    >
                        {options.map((option, index) => (
                            <div
                                key={option}
                                className={`cursor-pointer p-1 ${
selectedOption === index
? "bg-accent text-black"
: "text-white hover:bg-gray-700"
}`}
                                onClick={() => handleOptionClick(index)}
                            >
                                <span className="mr-2">
                                    {selectedOption === index ? "▶" : " "}
                                </span>
                                {option}
                            </div>
                        ))}
                    </motion.div>
                )}

                {renderComponent && (
                    <motion.div
                        className="mt-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {renderComponent}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
