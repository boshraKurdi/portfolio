import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import todolist from '../assets/img/todolist.png'
import Chats from '../assets/img/chats.png'
import Fitness from '../assets/img/fitness.png'
import { motion } from "framer-motion"
import {fadeIn} from './Variarts'

export const Projects = () => {

  const projects = [
    {
      title: "TodoList",
      description: "Front End React",
      imgUrl: todolist,
      linkGithub: 'github.com/boshraKurdi/list' ,
      linkOpen: 'boshraKurdi.github.io/list'
    },
    {
      title: "Fitness",
      description: "Front End React",
      imgUrl: Fitness,
      linkGithub: 'github.com/boshraKurdi/fitness' ,
      linkOpen: 'boshraKurdi.github.io/fitness'
    },
    {
      title: "Chats",
      description: "React & json server",
      imgUrl: Chats,
      linkGithub: 'github.com/boshraKurdi/chats' ,
      linkOpen: 'boshraKurdi.github.io/chats'
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
              <div>
                <motion.h2 variants={fadeIn('left' , 0.1)} initial="hidden" whileInView={'show'} viewport={{once: false ,amount: 0.7}}>Projects</motion.h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                      <Row style={{justifyContent: 'center'}}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
