import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import { ArrowUpRightCircle } from "react-bootstrap-icons";
export const ProjectCard = ({ title, description, imgUrl , linkGithub , linkOpen }) => {
  const handleOpenNewTab = (event , link) => {
    event.preventDefault();
    window.open(`https://${link}`, '_blank');
};
  return (
    <Col size={12} sm={8} md={6} xl={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="icon">
            <div onClick={(event)=>{handleOpenNewTab(event , linkGithub)}} className="i"><Github /></div>
            <div onClick={(event)=>{handleOpenNewTab(event , linkOpen)}} className="i"><ArrowUpRightCircle /></div>
          </div>
        </div>
      </div>
    </Col>
  )
}
