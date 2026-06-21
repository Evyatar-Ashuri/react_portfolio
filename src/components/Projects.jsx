import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectImage = ({ project }) => {
    if (project.image) {
        return (
            <img
                src={project.image}
                width={380}
                height={380}
                alt={project.title}
                className="mb-6 w-full max-w-[380px] rounded-lg border border-neutral-800 object-cover"
            />
        );
    }

    return (
        <div
            className="mb-6 flex h-[280px] w-full max-w-[380px] flex-col items-center justify-center rounded-lg border border-dashed border-neutral-700 bg-neutral-900/60"
            role="img"
            aria-label={`${project.title} preview placeholder`}
        >
            <div className="mb-3 rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                AI Platform
            </div>
            <span className="text-sm text-neutral-500">Project Preview</span>
        </div>
    );
};

const ProjectTitle = ({ project }) => {
    if (project.link) {
        return (
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline transition-colors hover:text-blue-400"
            >
                {project.title}
            </a>
        );
    }

    return <span>{project.title}</span>;
};

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-5xl"
            >
                Featured <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            <div className="space-y-10">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.6 }}
                        className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-6 lg:p-8"
                    >
                        <div className="flex flex-wrap items-center gap-8 lg:justify-center">
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: -100 }}
                                transition={{ duration: 1 }}
                                className="w-full lg:w-1/3"
                            >
                                <ProjectImage project={project} />
                            </motion.div>
                            <motion.div
                                whileInView={{ opacity: 1, x: 0 }}
                                initial={{ opacity: 0, x: 100 }}
                                transition={{ duration: 1 }}
                                className="w-full max-w-2xl lg:w-2/3"
                            >
                                <h3 className="mb-3 text-2xl font-semibold">
                                    <ProjectTitle project={project} />
                                </h3>
                                {project.summary && (
                                    <p className="mb-4 text-sm font-medium leading-relaxed text-neutral-300">
                                        {project.summary}
                                    </p>
                                )}
                                <p className="mb-6 whitespace-pre-line text-base leading-relaxed text-neutral-400">
                                    {project.description}
                                </p>
                                {project.highlights?.length > 0 && (
                                    <ul className="mb-6 list-disc space-y-2 pl-5 text-sm leading-relaxed text-neutral-400">
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight}>{highlight}</li>
                                        ))}
                                    </ul>
                                )}
                                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                                    Technologies
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="rounded-md border border-purple-500/30 bg-neutral-900 px-3 py-1.5 text-sm font-semibold text-purple-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-900/80 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-colors hover:border-purple-500/60 hover:bg-neutral-800 hover:text-white"
                                    >
                                        <FaGithub className="text-lg" />
                                        GitHub
                                    </a>
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
