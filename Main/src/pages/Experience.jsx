const ResumeExperience = ({ title }) => {
    return (
        <article>
            <img src="https://img.icons8.com/?size=24&id=83175&format=png" alt={`experience-item-${title}`}></img>
            <div>
                <p className="text-bold">{title}</p>
            </div>
        </article>
    )
}

const ExperienceSection = ({ title, experiences }) => {
    return (
        <section className="experience-card">
            <h4>{title}</h4>
            <div className="wrap-list">
                {experiences.map((experience, idx) =>
                    <ResumeExperience key={idx} title={experience}></ResumeExperience>)}
            </div>
        </section>
    )
}

const Experience = () => {
    const frontExperiences = ["HTML", "CSS", "JavaScript", "APIs"];
    const backExperiences = ["Node.js", "Java", "Python", "OOP", "Data Structures", "Algorithms"];
    return (
        <>
            <div class="container">
                <p>Explore My</p>
                <h1>Resume</h1>
                <main>
                    <ExperienceSection
                        title={"Frontend Development"}
                        experiences={frontExperiences}
                    ></ExperienceSection>
                    <ExperienceSection
                        title={"Backend Development"}
                        experiences={backExperiences}
                    ></ExperienceSection>
                </main>
            </div>

        </>
    )
}

export default Experience;