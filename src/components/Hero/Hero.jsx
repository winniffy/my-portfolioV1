import './Hero.css'

const Hero = () => {
    return (
        <div className='hero_container'>

            {/* hero background */}
            <div className="hero_bg-container">
                <div className="hero_bg-row_container">
                    { Array.from({ length: 5 }, (_, i) => <div key={i} className="hero_border-row"></div>)}
                </div>

                <div className="hero_bg-column_container">
                    { Array.from({ length: 6 }, (_, i) => <div key={i} className="hero_border-column"></div>)}
                </div>
            </div>

            {/* hero main */}
            <section className="hero_main-container">
                {/* hero top navbar */}
                <header className="hero_top-nav">
                    <h2 className="hero_logo">w.</h2>
                    <p className="hero_time">THUR. 13TH AUG, 2024 - 14:05</p>
                    <button className="mode_btn">DARK MODE</button>
                </header>

                <h1 className="hero_header">frontend developer
                <span className='hero_header-mid'> with a design background,</span>
                <span className='hero_header-bottom'>creating incredible web experiences.</span>
                </h1>
            </section>

            <nav className="navbar">
                
            </nav>
        </div>
    )
}

export default Hero