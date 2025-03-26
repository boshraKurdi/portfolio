// ProjectVideo.js
import React, { useState } from "react";
import { Col, Row, Container, Modal, Button } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import Imag1 from '../assets/img/cody.jpg'
import Video1 from '../assets/file/cody.mp4'
const projects = [
  {
    title: "cody",
    description: "Organize projects into Features and Pages, and Code Snippets Save and archive and categorize AI-generated code for future use Rearrange and manage code components for quick editing and copy-paste ,Upload, classify, and continue working on your projects at any time",
    imgUrl: Imag1,
    videoUrl: Video1,
    tools: [

    "Back-End" ,
    "Laravel (PHP): A powerful and scalable framework used to build our RESTful APIs and manage the entire backend infrastructure",
    "MySQL: For secure, fast, and reliable database management" ,
    "JWT (JSON Web Tokens): For secure, stateless authentication and API access management",
   "AI Stack" ,
   "LangChain: For managing prompt workflows and integration with AI models" ,
   "Groq API: Leveraging Llama 3.3 70B Versatile to generate high-quality, well-documented, and production-ready code",
   "LLM Prompt Engineering: Carefully crafted prompts to ensure clean, optimized, and professional AI code generation"
    ],
    linkGithub: "https://github.com/boshraKurdi/Cody",
  },

];

const ProjectVideo = ({mode}) => {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={8} md={6} xl={4}>
            <div className={`proj-card ${mode}`} onClick={() => handleShow(project)}>
              <img src={project.imgUrl} alt={project.title} />
              <div className="proj-info">
                <h4>{project.title}</h4>
                <span>{project.description}</span>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      {selectedProject && (
        <Modal show={show} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="video-container">
              <iframe
                width="100%"
                height="315"
                src={selectedProject.videoUrl}
                title="Project Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <p>{selectedProject.description}</p>
            <h6>Tools:</h6>
            <ul>
              {selectedProject.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="dark"
              onClick={() => window.open(`https://${selectedProject.linkGithub}`, "_blank")}
            >
              <Github /> code project 
            </Button>
            {/* <Button
              variant="primary"
              onClick={() => window.open(`https://${selectedProject.linkOpen}`, "_blank")}
            >
              <ArrowUpRightCircle /> عرض المشروع
            </Button> */}
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default ProjectVideo;
