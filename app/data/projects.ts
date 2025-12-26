// app/data/projects.ts

export const PROJECTS = [
  {
    title: "Wide-Event Analytics System",
    company: "Cognite Technologies",
    category: "Professional",
    logo: "/cognite.svg",
    tags: ["Kotlin", "Real-time Data", "AWS", "GCP", "Azure", "Cloud Governance", "Cloud Cost-Optimization"],
    problem: "Inefficient visibility into cross-platform service usage leading to unoptimized cloud expenditure and platform event blindness.",
    solution: "Architected a high-throughput internal services platform utilizing wide-event patterns to centralize and analyze granular platform metrics in real-time.",
    impact: "Empowered the organization with data-driven infrastructure planning and realized significant cloud cost reductions through automated governance."
  },
  {
    title: "Low-Code Data Platform",
    company: "Lowe's Services India",
    category: "Professional",
    logo: "/lowes.svg",
    tags: ["Java", "GCP", "Kafka", "Apache Beam", "Redis", "Cassandra", "Dataflow", "Spring Boot"],
    problem: "Excessive time-to-market for new data signals due to rigid, manual onboarding processes in the existing data infrastructure.",
    solution: "Engineered a scalable low-code platform that abstracted complex data ingestion logic into a configuration-driven pipeline architecture.",
    impact: "Reduced manual engineering overhead by 30% and drastically accelerated the product development lifecycle for data-dependent features."
  },
  {
    title: "Distributed Signal Ingestion Pipeline",
    company: "Lowe's Services India",
    category: "Professional",
    logo: "/lowes.svg",
    tags: ["Java", "GCP", "Kafka", "Apache Beam", "Redis", "Cassandra", "Dataflow", "Spring Boot"],
    problem: "Performance bottlenecks and system instability within legacy event-driven microservices during peak/variable data loads.",
    solution: "Modernized the data ecosystem by replacing legacy services with optimized ETL pipelines supporting unified batch and streaming processing via Apache Beam.",
    impact: "Established a resilient, high-performance architecture capable of handling fluctuating data volumes with improved maintainability."
  },
  {
    title: "Enterprise Content Store & Migration",
    company: "Infosys Ltd",
    category: "Professional",
    logo: "/infosys.svg",
    tags: ["Spring Boot", "Kafka", "Microservices", "PostgreSQL", "Neo4j"],
    problem: "Monolithic legacy constraints preventing high-throughput data migration and lacking secure multi-tenant capabilities.",
    solution: "Led a full-scale refactor of the monolith into a microservices architecture, implementing a Kafka-driven multi-tenant content store with graph-based metadata (Neo4j).",
    impact: "Increased measurable business value by 20% by enhancing system scalability, performance, and granular access control."
  },
  {
    title: "Personal Portfolio",
    company: "Personal",
    category: "Personal",
    tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    problem: "The need for a sophisticated digital presence to communicate over 7 years of backend engineering impact through a modern frontend interface.",
    solution: "Developed a performance-optimized, responsive portfolio utilizing Next.js, emphasizing a clean 'Case-Study' UI to showcase architectural depth.",
    impact: "Serves as a live demonstration of full-stack proficiency, modern UI/UX sensibilities, and professional branding."
  },
  {
    title: "Metrics Monitor & Infrastructure Simulator",
    company: "Personal",
    category: "Personal",
    tags: ["Spring Boot", "Kafka", "Docker", "Java", "MongoDB", "Grafana", "Prometheus"],
    problem: "Exploring the complexities of container orchestration and real-time observability in distributed systems.",
    solution: "Built a localized ecosystem simulating high-frequency application metrics, utilizing Kafka for ingestion and Grafana/Prometheus for visualization.",
    impact: "Deepened expertise in DevOps strategies, containerization with Docker, and full-stack observability patterns."
  },
  {
    title: "IPL Analytics Dashboard",
    company: "Personal",
    category: "Personal",
    tags: ["Spring Boot", "React", "Spring Batch", "HyperSQL", "Java", "AWS Elastic Beanstalk"],
    problem: "Handling large historical datasets and rendering them efficiently within a responsive user interface.",
    solution: "Implemented a Spring Batch-driven ingestion system to process historical IPL data into an in-memory DB, exposed via RESTful APIs to a React frontend.",
    impact: "Mastered data batching strategies and the seamless integration of Java backends with modern React frameworks."
  },
  {
    title: "Distributed Banking Microservices",
    company: "Personal",
    category: "Personal",
    tags: ["Spring Boot", "API Gateway", "Eureka Netflix", "Java", "H2", "Zipkin"],
    problem: "Understanding service discovery, routing, and inter-service communication patterns within a Cloud Native environment.",
    solution: "Designed a cluster of microservices using the Netflix OSS stack (Eureka, Zuul/Gateway) to handle transactional logic and service registry.",
    impact: "Gained hands-on experience with the Spring Cloud ecosystem and microservices resilience patterns."
  },
  {
    title: "Bookstagram (Content Management)",
    company: "Personal",
    category: "Personal",
    tags: ["Spring Boot", "Thymeleaf", "Spring Batch", "Java", "AWS Elastic Beanstalk"],
    problem: "Developing a streamlined server-side rendered application for cataloging and rating personal literature collections.",
    solution: "Utilized Thymeleaf and Spring Boot to build a robust CRUD application with batch-processing capabilities for library imports.",
    impact: "Refined skills in server-side rendering (SSR) and prototyping of database-driven applications."
  }
];