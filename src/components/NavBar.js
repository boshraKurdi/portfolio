import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Github , Telegram , Linkedin } from "react-bootstrap-icons";
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {
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
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://linkedin.com/in/boshrakurdi-0637452a0/" onClick={(event)=>{handleOpenNewTab(event ,'linkedin.com/in/boshrakurdi-0637452a0/')}}><Linkedin /></a>
                <a href="https://github.com/boshraKurdi/" onClick={(event)=>{handleOpenNewTab(event ,'/github.com/boshraKurdi/')}}><Github  /></a>
                <a href="https://github.com/boshraKurdi/" onClick={(event)=>{handleOpenNewTab(event ,'')}}><Telegram  /></a>
              </div>
              <div>
                <button onClick={downloadFile} className="vvd"><span>Download CV</span></button>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
