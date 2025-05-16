import './ProjectCard.css'

const ProjectCard = ({image, title, details, code, live, codeIcon, liveIcon}) => {

    const cardImageBgStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '400px',
    }


  return (
    <article className="project_card">
        <div className="project_card-inner" style={cardImageBgStyle}></div>
        <p className="project_card-text"> <b>{title}:</b> {details} </p>
        <div className="project_card-btns_container">
            <a href={code}>    
                <button className="project_card-btn">
                    <img src={codeIcon} alt="" className='project_card-icon' />
                    <p className='project_card-btn_text'>code</p>
                </button>
            </a>

            <a href={live} target="_blank">
                <button className="project_card-btn">
                    <img src={liveIcon} alt="" className='project_card-icon' />
                    <p className='project_card-btn_text'>live</p>
                </button>
            </a>
        </div>
    </article>
  )
}

export default ProjectCard