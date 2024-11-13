import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle , Envelope } from 'react-bootstrap-icons';
import headerImg from "../assets/file/banner.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion"
import {fadeIn} from './Variarts'

export const Banner = ({mode}) => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Front End", "Back End" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className={`banner ${mode}`} id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
              <div>
                <motion.span variants={fadeIn('' , 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} className="tagline" style={{display:'flex' , alignItems: 'center' , width:'fit-content'}}><Envelope style={{fontSize:'1.5rem' , marginRight: '.5rem'}}/>tkboshra624@gmail.com</motion.span>
                <motion.h1 variants={fadeIn('' , 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}}>{`Hi! I'm Boshra And I'm`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></motion.h1>
                  <motion.p variants={fadeIn('' , 0.9)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}}>Specialize in designing and developing modern websites, web applications , My work lies in achieving excellence as a professional web developer.</motion.p>
                  <motion.button variants={fadeIn('' , 1.1)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></motion.button>
              </div>
          </Col>
          <Col xs={12} md={6} xl={5} className="d-none d-md-block">
                <motion.div style={{marginTop:'-60px'}} variants={fadeIn('' , 0.5)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} className="bannerImg">
                  <Lottie animationData={headerImg} />
                </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
