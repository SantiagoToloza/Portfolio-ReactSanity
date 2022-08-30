import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import {myRESUME} from './public/SantiagoTolozaCV.pdf'
import "./Header.scss";

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="tag-cmp app__flex">
            <p className="p-text">Web Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
          <div className="badge-cmp app__flex">
            <span>⚛️ </span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Santiago</h1>
            </div>
          </div>
          <div className="download-cv">
          <button className="button-cv"> <a href="SantiagoTolozaCV.pdf" download="SantiagoTolozaRESUME.pdf" >Download CV</a> </button>
              <button className="button-cv"><a href="SantiagoTolozaCV.pdf" target="_blank">View Online</a> </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{duration:1.5}}
        viewport={{ once: true }}
        className="app__header-img"
      >
        <img src={images.profile} alt="profile_bg" />
      </motion.div>
    </div>
  );
};
export default AppWrap(Header, "home");
