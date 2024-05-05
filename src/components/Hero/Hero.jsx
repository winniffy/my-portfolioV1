import './Hero.css'

const Hero = () => {
    return (
        <div className='hero_container'>
            <div className="hero_bg-container">

                <div className="hero_bg-row_container">
                    { Array.from({ length: 5 }, (_, i) => <div key={i} className="hero_border-row"></div>)}
                </div>

                <div className="hero_bg-column_container">
                    { Array.from({ length: 6 }, (_, i) => <div key={i} className="hero_border-column"></div>)}
                </div>
            </div>
            <section className="hero_main-container">
                <h1 className="hero_header">frontend developer with a design background, creating incredible web experiences.</h1>
            </section>
        </div>
    )
}

export default Hero