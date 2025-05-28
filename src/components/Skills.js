import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Cycle from "./Cycle";
import Progress from "./Progress";
import { motion } from "framer-motion"
import {fadeIn} from './Variarts'


export const Skills = ({ mode }) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 991 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 991, min: 0 },
      items: 1,
    },
  };

  return (
    <section className={`skill ${mode}`} id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              style={{ marginBottom: "5rem" }}
              className="skill-bx wow zoomIn"
            >
              <motion.h2 variants={fadeIn('right' , 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} >Technical Skills</motion.h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <Cycle num="95" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <Cycle num='90' />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <Cycle num='80' />
                  <h5>Sass</h5>
                </div>
                <div className="item">
                  <Cycle num="85" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <Cycle num="80" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <Cycle num="75" />
                  <h5>React js</h5>
                </div>
                <div className="item">
                  <Cycle num="75" />
                  <h5>Php</h5>
                </div>
                <div className="item">
                  <Cycle num="95" />
                  <h5>Mysql</h5>
                </div>
                <div className="item">
                  <Cycle num="70" />
                  <h5>Laravel</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              style={{ marginBottom: "5rem" }}
              className="skill-bx wow zoomIn"
            >
              <motion.h2 variants={fadeIn('left' , 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}}>Professional Skills</motion.h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <Cycle num="95" />
                  <h5>Frond End Development</h5>
                </div>
                <div className="item">
                  <Cycle num="90" />
                  <h5>Back End Development</h5>
                </div>
                <div className="item">
                  <Cycle num="100" />
                  <h5>Team Work</h5>
                </div>
                <div className="item">
                  <Cycle num="95" />
                  <h5>Creativity</h5>
                </div>
                <div className="item">
                  <Cycle num="90" />
                  <h5>Problem-Solving</h5>
                </div>
                <div className="item">
                  <Cycle num="95" />
                  <h5>Communication</h5>
                </div>

              </Carousel>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <motion.h2 variants={fadeIn('right' , 0.2)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}}>Languages</motion.h2>
              <Progress title='Arabic' hand='100' />

              <Progress title='English' hand='75' />
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Img" />
    </section>
  );
};
