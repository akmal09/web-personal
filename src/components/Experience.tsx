'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: "Company Name",
    position: "Software Developer",
    period: "2022 - Present",
    description: [
      "Developed and maintained full-stack applications using Spring Boot and React",
      "Implemented RESTful APIs and database optimizations",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Participated in code reviews and implemented best practices"
    ],
    technologies: ["Spring Boot", "React", "PostgreSQL", "Docker"]
  },
  {
    company: "Previous Company",
    position: "Backend Developer",
    period: "2020 - 2022",
    description: [
      "Built scalable backend services using AdonisJS and TypeScript",
      "Optimized database queries and improved application performance",
      "Implemented CI/CD pipelines for automated deployment",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["AdonisJS", "TypeScript", "MySQL", "Git"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 border-l-2 border-blue-500"
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500" />
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                        {exp.position}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="list-disc list-inside space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-300">
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 