import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}
        >Introduction</p>
        <h2 className={styles.sectionHeadText}>
          Overview
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Steven is an experienced and versatile software developer passionate about crafting innovative solutions.
        With a solid background in computer science and extensive hands-on experience, he brings a unique blend
        of technical expertise and creative problem-solving skills to every project. He specializes in full-stack
        development and is proficient in a wide range of programming languages and frameworks, including but not limited
        to Java, Python, JavaScript, and Rust. His expertise extends to web development, mobile app development, and database design.
        He has a strong track record of delivering high-quality software solutions on time and within budget.
        He is adept at collaborating with cross-functional teams, communicating complex technical concepts to non-technical
        stakeholders, and adapting to evolving project requirements. Constantly staying up-to-date with the latest industry
        trends and best practices, he is committed to continuous learning and professional growth.
      </motion.p>
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index} {...services} />
        ))}
      </div>


    </>
  )
}

export default SectionWrapper(About, "about")

