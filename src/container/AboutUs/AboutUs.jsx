import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { images } from "../../constants";
import "./AboutUs.css";


const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const controls = useAnimation();

  useEffect(() => {
    console.log(isInView);
    if (isInView) {
      controls.start("show");
    }
  }, [isInView]);

  const aboutref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: aboutref,
    offset: ["end end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.5, 1.2], [1,  0]);

  return (
    <div className="app__aboutus flex__center" id="about">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          show: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{ duration: 1, delay: 1 }}
        className="app__aboutus-content flex__center"
      >

        <motion.div
          ref={aboutref}
          style={{ opacity }}
          className="app__aboutus-content_about"
        >
          <h1 className="headtext__cormorant">About Us</h1>

          <div>
            <img src={images.spoon} alt="about_spoon" className="spoon__img" />
            <p className="p__opensans">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              pharetra adipiscing ultrices vulputate posuere tristique. In sed
              odio nec aliquet eu proin mauris et.
            </p>
            <button type="button" className="custom__button">
              Know More
            </button>
          </div>
        </motion.div>

        <div className="app__aboutus-content_knife app__bg flex__center">
          <motion.img
            ref={aboutref}
            style={{ opacity }}
            src={images.table}
            alt="table"
          />
       </div>

        <motion.div
          ref={aboutref}
          style={{ opacity }}
          className="app__aboutus-content_history"
        >
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat.
            Risus placerat morbi volutpat habitasse interdum mi aliquam In sed
            odio nec aliquet.
          </p>
          <button type="button" className="custom__button">
            Know More
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
