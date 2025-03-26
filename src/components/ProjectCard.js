import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { ArrowUpRightCircle } from "react-bootstrap-icons";
import todolist from "../assets/img/todolist.png";
import Chats from "../assets/img/chats.png";
import Weather from "../assets/img/weather.png";
import Fitness from "../assets/img/fitness.png";
import Demo from "../assets/img/demo.png";
import { useState } from "react";
export const ProjectCard = ({mode}) => {
  const handleOpenNewTab = (event, link) => {
    event.preventDefault();
    window.open(`https://${link}`, "_blank");
  };
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleShow = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const handleClose = () => setShow(false);
  const projects = [
    {
      title: "Todo List Application",
      description: "Front end",
      imgUrl: todolist,
      tools: [
        "React.js",
        "Redux ToolKit",
      ],
      linkGithub: "github.com/boshraKurdi/todolist",
      linkOpen: "boshraKurdi.github.io/todolist",
    },
    {
      title: "Fitness Platform",
      description: "Front end",
      imgUrl: Fitness,
      tools: [
        "React.js",
        "Redux ToolKit",
        "React Router Dom",
      ],
      linkGithub: "github.com/boshraKurdi/fitness",
      linkOpen: "boshraKurdi.github.io/fitness",
    },
    {
      title: "Chat System",
      description: "Front end",
      imgUrl: Chats,
      tools: [
        "React.js",
        "Redux ToolKit",
        "Real-time",
        "API",
      ],
      linkGithub: "github.com/boshraKurdi/chats",
      linkOpen: "boshraKurdi.github.io/chats",
    },
    {
      title: "Weather",
      description: "Front end",
      imgUrl: Weather,
      tools: [
        "React.js",
        "Redux ToolKit",
        "React Router Dom",
        "API",
      ],
      linkGithub: "github.com/boshraKurdi/weather",
      linkOpen: "boshraKurdi.github.io/weather",
    },
    {
      title: "Demo",
      description: "Front end",
      imgUrl: Demo,
      tools: [
        "React.js",
        'Material UI'
      ],
      linkGithub: "github.com/boshraKurdi/demo",
      linkOpen: "boshraKurdi.github.io/demo",
    },
  ];
  return (
    <Container>
      <Row>
        {projects.map((project, index) => (
          <Col key={index} sm={8} md={6} xl={4}>
            <div
              className={`proj-card proj-imgbx ${mode}`}
              onClick={() => handleShow(project)}
            >
              <img src={project.imgUrl} alt={project.title} />
              <div className="proj-txtx">
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
            <div style={{padding:"0"}} className="video-container">
             <img src={selectedProject.imgUrl} alt="none" />
            </div>
            <p>{selectedProject.description}</p>
            <h6>Technologies:</h6>
            <ul>
              {selectedProject.tools.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="dark"
              onClick={() =>
                window.open(`https://${selectedProject.linkGithub}`, "_blank")
              }
            >
              <Github /> code project
            </Button>
            <Button
              variant="primary"
              onClick={() =>
                window.open(`https://${selectedProject.linkOpen}`, "_blank")
              }
            >
              <ArrowUpRightCircle /> open project
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};
