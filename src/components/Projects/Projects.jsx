/* eslint-disable react/no-unescaped-entities */
import ProjectCard from "../ProjectCard/ProjectCard"
import "./Projects.css"
import tokeiCover from "../../assets/tokei-cover.png";
import howfarCover from "../../assets/howfar-cover.png";
import waqCover from "../../assets/waq-cover.png";
import cozyCover from "../../assets/cozyhaven-cover.png";

const Projects = () => {

    const projectsArray = [
        {
            id: 1,
            image: `${tokeiCover}`,
            title: 'tokei',
            details: 'a movie/series encyclopedia',
            code: 'https://github.com/winniffy/tokei',
            live: 'https://tokei-bice.vercel.app/'

        },

        {
            id: 2,
            image: `${howfarCover}`,
            title: 'howfar',
            details: 'an annual multi-timer web app'
        },

        {
            id: 1,
            image: `${waqCover}`,
            title: 'WAQ',
            details: 'landing page'
        },

        {
            id: 1,
            image: `${tokeiCover}`,
            title: 'tokei',
            details: 'a movie/series encyclopedia'
        },
    ]

return (
    <section className="projects_container">
        {/* projects header */}
        <h2 className="projects_header">projects</h2>
        <p className="projects_subtext">
            selected projects i've made in the kitchen
        </p>

        {/* cards container */}
        <div className="project_cards-container">
            {
                projectsArray.map((project) =>
                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        details={project.details}
                        code={project.code}
                        live={project.live}
                    />
                )
            }
        </div>
    </section>
  )
}

export default Projects