
const ProjectCard = ({image, title, details, code, live}) => {

    const cardImageBgStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '250px',
    }


  return (
    <article className="project_card">
        <div className="project_card-inner" style={cardImageBgStyle}></div>
        <p className="project_card-text"> <b>{title}</b> {details} </p>
        <div className="project_card-btns_container">
            <a href={code}>
                <button className="project_card-btn">code</button>
            </a>

            <a href={live}>
                <button className="project_card-btn">live</button>
            </a>
        </div>
    </article>
  )
}

export default ProjectCard