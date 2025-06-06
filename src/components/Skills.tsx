'use client';

import { motion } from 'framer-motion';

const skills = [
  {
    category: "Backend Development",
    items: [
      { name: "Spring Boot", level: "Advanced" },
      { name: "AdonisJS", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "Laravel", level: "Intermediate" }
    ]
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: "Intermediate" },
      { name: "jQuery", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Next.js", level: "Intermediate" }
    ]
  },
  {
    category: "Databases",
    items: [
      { name: "OracleSQL", level: "Advanced" },
      { name: "PostgreSQL", level: "Advanced" },
      { name: "MySQL", level: "Advanced" }
    ]
  },
  {
    category: "DevOps & Tools",
    items: [
      { name: "CI/CD", level: "Intermediate" },
      { name: "Git", level: "Advanced" },
      { name: "Docker", level: "Advanced" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
                  {skillGroup.category}
                </h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill.name} className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full">
                        {skill.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 