import project1 from "../assets/projects/project-1.png";

export const HERO_CONTENT = `Backend & AI Engineer focused on building scalable backend systems, cloud infrastructure, and AI-powered applications.

Experienced with Python, Django, FastAPI, AWS, Docker, PostgreSQL, and LLM integrations, with hands-on experience delivering production-ready SaaS solutions.
`;

export const ABOUT_TEXT = `I am a Backend Engineer and Computer Science student with hands-on experience building SaaS platforms, REST APIs, cloud infrastructure, and AI-powered applications.

My work spans backend development, DevOps, and system architecture using technologies such as Python, Django, AWS, PostgreSQL, and modern AI tooling.

I enjoy solving complex engineering challenges and building scalable production-ready systems.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Backend Engineer",
    company: "BeCompanyLTD",
    description: `
    • Developed and maintained SaaS and B2B backend systems using Python, Django, and Django REST Framework.

    • Designed REST APIs, authentication flows, and real-time communication features using WebSockets and Django Channels.

    • Led cloud infrastructure initiatives on AWS, including ECS migrations, Dockerized deployments, ALB configuration, and S3 integrations.

    • Built CI/CD pipelines, optimized PostgreSQL databases, and implemented secure authentication using OAuth 2.0 and JWT.

    `,
    technologies: ["Python", "Django", "RESTful APIs", "AWS", "Docker", "Nginx"],
  },
];

export const EDUCATION = [
  {
    year: "2024 - 2027",
    role: "Bachelor's Degree",
    company: "Computer Science",
    description: `Pursuing a Bachelor's degree in Computer Science with a focus on software engineering, algorithms, data structures, databases, and system design.

Combining academic foundations with hands-on industry experience in backend development, cloud infrastructure, and AI-powered applications.`,
    technologies: ["Software Engineering", "Algorithms", "Data Structures", "Databases", "System Design"],
  },
];

export const TECH_CATEGORIES = [
  {
    title: "Backend",
    technologies: ["Python", "Django", "FastAPI"],
  },
  {
    title: "Cloud & DevOps",
    technologies: ["AWS", "Docker", "Nginx"],
  },
  {
    title: "Data",
    technologies: ["PostgreSQL", "Redis"],
  },
  {
    title: "AI",
    technologies: ["OpenAI", "RAG", "Qdrant"],
  },
];

export const PROJECTS = [
  {
    title: "ChatConnect",
    image: project1,
    description:
      "ChatConnect is a full-stack web application built with Django, featuring CRUD operations, user authentication, and a RESTful API for smooth frontend-backend communication. The frontend is developed using Django's built-in template system. The backend utilizes Django ORM for database management, and the entire project is containerized using Docker and orchestrated with Docker Compose. NGINX is configured as a reverse proxy to enhance production performance. The project showcases scalability and reliability.",
    technologies: ["HTML", "CSS", "Python", "JavaScript", "REST-API"],
    link: "https://github.com/Evyatarashuri/ChatConnect",
  },
  {
    title: "Conversational RAG Platform",
    image: null,
    summary:
      "Full-stack LLMOps monorepo for a multi-document conversational RAG application. Built with FastAPI, React TypeScript, Qdrant, Redis, Celery, RabbitMQ, PostgreSQL, MinIO, Docker, LangChain, and Ollama.",
    description: `Built a full-stack conversational RAG platform where authenticated users can create chat sessions, upload multiple documents, and ask context-aware questions over their private knowledge base.

The backend uses FastAPI with Google OAuth authentication, session-scoped document ingestion, asynchronous background processing with Celery and RabbitMQ, object storage with MinIO, vector search with Qdrant, Redis-backed chat history, and PostgreSQL persistence. The RAG pipeline uses LangChain/LCEL with question contextualization, MMR retrieval, Ollama embeddings, and an Ollama-powered LLM.

The frontend is a React + TypeScript SPA built with Vite, React Router, TanStack Query, Zustand, and Tailwind CSS. The project is orchestrated with Docker Compose and includes supporting services such as Qdrant, Redis, PostgreSQL, RabbitMQ, Celery worker, Flower, and MinIO.`,
    highlights: [
      "Designed a full-stack multi-document RAG architecture",
      "Implemented authenticated chat sessions with Google OAuth and HttpOnly cookies",
      "Built document upload and validation flow for PDF, DOCX, TXT, PPTX, Markdown, CSV, and Excel files",
      "Added asynchronous document ingestion using Celery workers and RabbitMQ",
      "Stored uploaded files in MinIO and indexed document chunks into Qdrant",
      "Implemented session-scoped vector retrieval with MMR search",
      "Used Redis for active chat history and PostgreSQL for persistent chat/session data",
      "Built a React TypeScript frontend with modern client/server state management",
      "Added Docker Compose orchestration for the full local LLMOps stack",
      "Included a LangSmith-based evaluation workflow for RAG answer quality",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "React",
      "TypeScript",
      "LangChain",
      "LCEL",
      "Qdrant",
      "Ollama",
      "Redis",
      "Celery",
      "RabbitMQ",
      "PostgreSQL",
      "MinIO",
      "Docker",
      "SQLAlchemy",
      "Alembic",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
    ],
    link: "https://github.com/Evyatarashuri/llmops-series",
  },
];

export const CONTACT = {
  email: "evyatar54545@gmail.com",
};

export const SOCIAL_LINKS = {
  github: "https://github.com/Evyatarashuri",
  linkedin: "https://www.linkedin.com/in/evyatar-ashuri-469063237/",
  email: CONTACT.email,
};
