import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import Cycle from "./Cycle";
import Progress from "./Progress";


export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              style={{ marginBottom: "5rem" }}
              className="skill-bx wow zoomIn"
            >
              <h2 >Technical Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
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
              <h2>Professional Skills</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
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
              <h2 >Languages</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>

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
