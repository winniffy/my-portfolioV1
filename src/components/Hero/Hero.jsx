import { useEffect, useState } from 'react';
import './Hero.css'
import Navbar from '../Navbar/Navbar';

const Hero = () => {

    const [now, setNow] = useState(new Date());

    // function to display time 
    function displayTime(){
        setNow(new Date())
    }

    // refresh time
    useEffect(() => {
        const refreshTime = setInterval(displayTime, 1000);

        return () => clearInterval(refreshTime);
    }, []);

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

                    {/* hero date/time */}
                    <p className="hero_time">
                        {
                            `${now.toDateString()} \u00A0 - \u00A0 
                            ${(now.getHours()<10?'0':'') + now.getHours()} : 
                            ${(now.getMinutes()<10?'0':'') + now.getMinutes()} : 
                            ${(now.getSeconds()<10?'0':'') + now.getSeconds()} `
                        }
                    </p>

                    {/* dark/light mode button */}
                    <button className="mode_btn">DARK MODE</button>
                </header>

                <h1 className="hero_header">frontend developer
                <span className='hero_header-mid'> with a design background,</span>
                <span className='hero_header-bottom'>creating incredible web experiences.</span>
                </h1>
            </section>

            {/* navbar component */}
            <Navbar />

        </div>
    )
}

export default Hero