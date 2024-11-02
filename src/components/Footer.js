import { Container, Row, Col } from "react-bootstrap";

import { Github , Telegram , Linkedin } from "react-bootstrap-icons";

export const Footer = () => {
  const handleOpenNewTab = (event , link) => {
    event.preventDefault();
    window.open(`https://${link}`, '_blank');
};
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span style={{fontSize: '3rem' ,fontWeight: 'bold'}}>LOGO</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://linkedin.com/in/boshrakurdi-0637452a0/" onClick={(event)=>{handleOpenNewTab(event ,'linkedin.com/in/boshrakurdi-0637452a0/')}}><Linkedin /></a>
                <a href="https://github.com/boshraKurdi/" onClick={(event)=>{handleOpenNewTab(event ,'/github.com/boshraKurdi/')}}><Github  /></a>
                <a href="https://github.com/boshraKurdi/" onClick={(event)=>{handleOpenNewTab(event ,'')}}><Telegram  /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
