import { Container, Row, Col } from "react-bootstrap";

import { Github , Linkedin } from "react-bootstrap-icons";

export const Footer = ({mode}) => {
  const handleOpenNewTab = (event , link) => {
    event.preventDefault();
    window.open(`https://${link}`, '_blank');
};
  return (
    <footer className={`footer ${mode}`}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <span style={{fontSize: '3rem' ,fontWeight: 'bold'}}>BOSHRA</span>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a className="a" href="https://linkedin.com/in/boshrakurdi-0637452a0/" onClick={(event)=>{handleOpenNewTab(event ,'linkedin.com/in/boshrakurdi-0637452a0/')}}><Linkedin /></a>
                <a className="a" href="https://github.com/boshraKurdi/" onClick={(event)=>{handleOpenNewTab(event ,'/github.com/boshraKurdi/')}}><Github  /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
