import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import { motion } from "framer-motion";
import { fadeIn } from "./Variarts";
import ProjectVideo from "./ProjectVideo";

export const Projects = ({ mode }) => {
  return (
    <section className={`project ${mode}`} id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <motion.h2
                variants={fadeIn("left", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
              >
                Projects
              </motion.h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <ProjectCard mode={mode} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <ProjectVideo mode={mode} />
                  </Tab.Pane>
                  <Tab.Pane eventKey="third"></Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
