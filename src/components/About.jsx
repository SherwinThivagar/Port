import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        Mechanical Design Engineer with a Master&apos;s degree in Digital Design and Manufacture (Mechanical Design focus) from the University of Edinburgh, UK, and a Bachelor&apos;s degree in Mechanical Engineering from St. Joseph&apos;s College of Engineering, Chennai. <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        I bring 3 years of industry experience working with CAD tools including SolidWorks, CATIA, Autodesk Inventor, AutoCAD, and Fusion 360, along with simulation software such as Abaqus, STAR-CCM+, and MATLAB. My master&apos;s research focused on the characterization of titanium alloy components produced through Electron Beam Melting (EBM) using NeuBeam technology, in collaboration with Wayland Additive. <br className="sm:block hidden" />
        <br className="sm:block hidden" />
        My interests lie in design optimization, additive manufacturing, and developing innovative engineering solutions. I am currently seeking opportunities to further apply and expand my expertise in mechanical design and advanced manufacturing.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');
