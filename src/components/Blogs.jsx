import React from 'react';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { blogs } from '../constants';

const FeedbackCard = ({ index, blogs }) => (
  <motion.div variants={fadeIn('', 'spring', index * 0.5, 0.75)} className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
    <a href={blogs.link}>
      <img src={blogs.image} className="w-full h-64 object-cover rounded-[20px]" />
      <div className="mt-2">
        <p className="text-white tracking-wider text-[18px]">{blogs.title}</p>
      </div>
    </a>
  </motion.div>
);

const Blogs = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>MY OUTPUT</p>
          <h2 className={styles.sectionHeadText}>Blogs.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {blogs.map((blog, index) => (
          <FeedbackCard key={blog.title} index={index} blogs={blog} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Blogs, '');
