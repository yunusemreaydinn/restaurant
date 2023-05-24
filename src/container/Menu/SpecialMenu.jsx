import { motion } from "framer-motion";
import { MenuItem } from "../../components";
import { data, images } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => {
  const opacityAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
      },
    },
  };

  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <motion.div
        variants={opacityAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        style={{ marginTop: "20px" }}
        className="app__specialMenu-title"
      >
        <h1 className="headtext__cormorant">Today&apos;s Special </h1>
      </motion.div>

      <motion.div
        variants={opacityAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        className="app__specialMenu-menu"
      >
        <div className="app__specialMenu-menu_wine  flex__center">
          <p className="app__specialMenu-menu_heading">Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <MenuItem
                key={wine.title + index}
                title={wine.title}
                price={wine.price}
                tags={wine.tags}
              />
            ))}
          </div>
        </div>
        <div className="app__specialMenu-menu_img">
          <img src={images.menu} alt="menu__img" />
        </div>
        <div className="app__specialMenu-menu_cocktails  flex__center">
          <p className="app__specialMenu-menu_heading">Desserts</p>

          <div className="app__specialMenu_menu_items">
            {data.desserts.map((cocktail, index) => (
              <MenuItem
                key={cocktail.title + index}
                title={cocktail.title}
                price={cocktail.price}
                tags={cocktail.tags}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={opacityAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        style={{ marginTop: 15 }}
      >
        <motion.button
          variants={opacityAnimation}
          initial="hidden"
          whileInView="visible"
          type="button"
          className="custom__button"
        >
          View More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default SpecialMenu;
