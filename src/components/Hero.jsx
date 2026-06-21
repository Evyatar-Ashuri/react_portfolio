import { HERO_CONTENT, SOCIAL_LINKS } from "../constants";
import evyatar from "../assets/evyatar.jpeg";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                            >
                                Evyatar Ashuri
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                        >
                            Backend & AI Engineer
                        </motion.span>
                        <motion.p
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-wrap justify-center gap-4 lg:justify-start"
                        >
                            <a
                                href={SOCIAL_LINKS.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-purple-500/60 hover:bg-neutral-800 hover:text-white"
                            >
                                <FaGithub className="text-lg" />
                                GitHub
                            </a>
                            <a
                                href={SOCIAL_LINKS.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-purple-500/60 hover:bg-neutral-800 hover:text-white"
                            >
                                <FaLinkedin className="text-lg" />
                                LinkedIn
                            </a>
                        </motion.div>
                    </div>
                </div>

                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            src={evyatar}
                            alt="evyatar"
                            className="w-1/2 h-auto"
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
