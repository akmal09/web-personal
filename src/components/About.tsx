'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-[300px] h-[500px] mx-auto overflow-hidden rounded-full border-4 border-blue-500"
            >
              <Image
                src="/assets/foto_akmal.png"
                alt="Akmal&apos;s profile picture"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                priority
                quality={90}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Hello! I&apos;m Akmal, a Software Developer/Engineer with expertise in designing and implementing robust web applications using MVC design patterns. 
Proficient in Backend development with Spring Boot (Java), AdonisJS (TypeScript), and Express (Node.js), and skilled in database 
technologies like OracleSQL, PostgreSQL, and MySQL. Experienced in maintaining and creating CI/CD pipelines to streamline 
deployment processes. Versatile in full-stack development using Laravel (PHP) and frontend tools such as ReactJS and jQuery, 
ensuring seamless integration and user-friendly interfaces.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My journey in technology began [Your Story]. I love tackling complex problems
                and turning them into simple, beautiful, and intuitive solutions.
              </p>

              <div className="flex gap-4 mt-6">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                >
                  View Projects
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 