import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { client } from '../../client';
import './Experience.scss';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Experiences</h2>

      <div className="app__experience-container">
        {experiences.map((experience) => (
          <motion.div className="app__experience-item" key={experience.year}>
            <div className="app__experience-year">
              <p className="bold-text">{experience.year}</p>
            </div>
            <motion.div className="app__experience-works">
              {experience.works.map((work) => (
                <>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__experience-work"
                    data-tip
                    data-for={work.name}
                    key={work.name}
                  >
                    <h4 className="bold-text">{work.name}</h4>
                    <p className="p-text">{work.company}</p>
                  </motion.div>
                  <Tooltip
                    id={work.name}
                    effect="solid"
                    arrowColor="#fff"
                    className="experience-tooltip"
                  >
                    {work.desc}
                  </Tooltip>
                </>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Experience;
