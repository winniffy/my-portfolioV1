/* eslint-disable react/no-unescaped-entities */
import "./Projects.css"

const Projects = () => {
  return (
    <section className="projects_container">
        <h2 className="projects_header">projects</h2>
        <p className="projects_subtext">
            selected projects i've made in the kitchen
        </p>

        {/* cards container */}
        <div className="project_cards-container">
            <article className="project_card">
                <div className="project_card-inner"></div>
                <p className="project_card-text"> <b>tokei:</b> a movie/series encyclopedia </p>
                <div className="project_card-btns_container">
                    <button className="project_card-btn">code</button>
                    <button className="project_card-btn">live</button>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Projects