import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Github , Linkedin , MoonStars , Sun } from "react-bootstrap-icons";
import { motion } from "framer-motion"
import {fadeIn} from './Variarts'

export const NavBar = ({ mode , setMode }) => {
  const handleOpenNewTab = (event , link) => {
    event.preventDefault();
    window.open(`https://${link}`, '_blank');
};
  const downloadFile = () => {
    const fileUrl = `${process.env.PUBLIC_URL}/cv.pdf`;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "cv.pdf";
    link.click();
  };
  function HandelMode(){
    if(mode === 'light'){
      localStorage.setItem('mode' , 'dark')
     setMode('dark')
    }else{
      localStorage.setItem('mode' , 'light')
      setMode('light');
    }

  } 


  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <>
      <Navbar  expand="md" className={scrolled ? `scrolled ${mode} navb` : `${mode} navb`}>
        <Container >
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}><motion.div variants={fadeIn('down' , 0.1)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.1}}>Home</motion.div></Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}><motion.div variants={fadeIn('down' , 0.4)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.3}}>Skills</motion.div></Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}><motion.div variants={fadeIn('down' , 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.5}}>Projects</motion.div></Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <motion.a variants={fadeIn('down' , 0.6)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} className="a" href="https://www.linkedin.com/in/boshra-kurdi-0637452a0" onClick={(event)=>{handleOpenNewTab(event ,'www.linkedin.com/in/boshra-kurdi-0637452a0')}}><Linkedin /></motion.a>
                <motion.a variants={fadeIn('down' , 0.7)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} className="a" href="https://github.com/boshraKurdi/" onClick={(event)=>{handleOpenNewTab(event ,'/github.com/boshraKurdi/')}}><Github  /></motion.a>
                <motion.div variants={fadeIn('down' , 0.8)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}} className="a" href="index" onClick={()=>{HandelMode()}}>{mode === 'light' ? <Sun  /> : <MoonStars />}</motion.div>
              </div>
              <div>
                <motion.button variants={fadeIn('' , 0.8)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}}  className="vvd" onClick={downloadFile}><span>Download CV</span></motion.button>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
