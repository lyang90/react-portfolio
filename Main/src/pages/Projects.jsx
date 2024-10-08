const ProjectElement = ({ img, title, link }) => {
    return (
        <div class="project">
            <img src={img}></img>
            <h3>{title}</h3>
            <a href={link}>Github</a>
        </div>
    )
}

const Projects = () => {
    return (
        <>
            <h1>Projects</h1>

            <ProjectElement img={"#"} title={"Project 1"} link={"#"}></ProjectElement>
            <ProjectElement img={"#"} title={"Project 2"} link={"#"}></ProjectElement>
            <ProjectElement img={"#"} title={"Project 3"} link={"#"}></ProjectElement>

        </>
    )
};

export default Projects;