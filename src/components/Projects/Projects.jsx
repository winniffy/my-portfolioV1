/* eslint-disable react/no-unescaped-entities */
import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.css";
import tokeiCover from "../../assets/tokei-cover.png";
import howfarCover from "../../assets/howfar-cover.png";
import waqCover from "../../assets/waq-cover.png";
import cozyCover from "../../assets/cozyhaven-cover.png";
import githubIcon from "../../assets/githubicon.svg";
import linkIcon from "../../assets/linkicon.svg";

const Projects = () => {

    const projectsArray = [
        {
            id: 1,
            image: `${tokeiCover}`,
            title: 'tokei',
            details: 'a movie/series encyclopedia',
            code: 'https://github.com/winniffy/tokei',
            live: 'https://tokei-bice.vercel.app/',
            codeIcon: `${githubIcon}`,
            liveIcon: `${linkIcon}`
        },

        {
            id: 2,
            image: `${howfarCover}`,
            title: 'howfar',
            details: 'an annual multi-timer web app',
            code: 'https://github.com/winniffy/howfar2023',
            live: 'https://howfar2023.vercel.app/',
            codeIcon: `${githubIcon}`,
            liveIcon: `${linkIcon}`
        },

        {
            id: 1,
            image: `${waqCover}`,
            title: 'WAQ',
            details: 'landing page',
            code: 'https://github.com/winniffy/waq-landing-page',
            live: 'https://waq-landing-page.vercel.app/',
            codeIcon: `${githubIcon}`,
            liveIcon: `${linkIcon}`
        },

        {
            id: 1,
            image: `${cozyCover}`,
            title: 'cozyhaven',
            details: 'landing page',
            code: 'https://github.com/winniffy/cozyhaven',
            live: 'https://cozyhaven.vercel.app/',
            codeIcon: `${githubIcon}`,
            liveIcon: `${linkIcon}`
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
                        codeIcon={project.codeIcon}
                        liveIcon={project.liveIcon}
                    />
                )
            }
        </div>

        {/* view more projects */}
        <button className="view_more">
            <p>view more of my projects on github</p>
            <img src="" alt="" />
        </button>
    </section>
)
}

export default Projects