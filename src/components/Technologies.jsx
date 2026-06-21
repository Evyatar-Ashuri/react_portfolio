import { FaAws, FaPython } from "react-icons/fa";
import { BiLogoDjango, BiLogoPostgresql } from "react-icons/bi";
import { SiNginx, SiFastapi, SiDocker, SiRedis, SiOpenai } from "react-icons/si";
import { RiFileSearchLine, RiDatabase2Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { TECH_CATEGORIES } from "../constants";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        },
    },
});

const TECH_ICONS = {
    Python: <FaPython className="text-5xl" style={{ color: "#306998" }} />,
    Django: <BiLogoDjango className="text-5xl text-green-600" />,
    FastAPI: <SiFastapi className="text-5xl text-teal-400" />,
    AWS: <FaAws className="text-5xl text-yellow-400" />,
    Docker: <SiDocker className="text-5xl text-blue-400" />,
    Nginx: <SiNginx className="text-5xl text-green-600" />,
    PostgreSQL: <BiLogoPostgresql className="text-5xl text-sky-700" />,
    Redis: <SiRedis className="text-5xl text-red-500" />,
    OpenAI: <SiOpenai className="text-5xl text-neutral-100" />,
    RAG: <RiFileSearchLine className="text-5xl text-purple-400" />,
    Qdrant: <RiDatabase2Line className="text-5xl text-cyan-400" />,
};

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
                className="my-20 text-center text-4xl"
            >
                Technologies
            </motion.h2>
            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1.5 }}
                className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4"
            >
                {TECH_CATEGORIES.map((category, categoryIndex) => (
                    <motion.div
                        key={category.title}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                        className="rounded-2xl border border-neutral-800 bg-neutral-900/30 p-6"
                    >
                        <h3 className="mb-6 text-center text-lg font-medium text-neutral-300">
                            {category.title}
                        </h3>
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            {category.technologies.map((tech, techIndex) => (
                                <motion.div
                                    key={tech}
                                    variants={iconVariants(2 + techIndex * 0.5)}
                                    initial="initial"
                                    animate="animate"
                                    className="flex flex-col items-center gap-2"
                                >
                                    <div className="rounded-2xl border-4 border-neutral-800 p-3">
                                        {TECH_ICONS[tech]}
                                    </div>
                                    <span className="text-xs font-medium text-neutral-500">
                                        {tech}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
