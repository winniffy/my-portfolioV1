/* eslint-disable react/prop-types */
import "./Preloader.css";
import { motion } from "framer-motion";
import videoPreloader from "../../assets/Domain-Expansion_JJK.mp4";
import { useState } from "react";

const Preloader = ({ startLoading }) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    };

    const startTimer = () => {
        togglePlay();
        // play();
        startLoading(true);

        setTimeout(() => {
        startLoading(false);
        }, 13000);
    };

    const skipTimer = () => {
        startLoading(false);
    };

    return (
        // preloader container
        <div className="preloader_container">
            
        {isPlaying && (
            <motion.video
            autoPlay
            className="preloader_vid"
            initial={{ y: -150 }}
            animate={{
                y: 0,
                boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.15)",
                transitionDuration: ".5s",
            }}
            >
            <source src={videoPreloader} type="video/mp4" />
            </motion.video>
        )}

        {/* preloader button container */}
        <div className="preloader_btn-container">
            <button className="preloader_btn preloader_btn-1" onClick={startTimer}>
                <h4>ENJOY THE WELCOME EXPERIENCE 😁</h4>
                <p>(HOSTED BY SUKUNA)</p>
            </button>

            <button className="preloader_btn preloader_btn-2" onClick={skipTimer}>
                <h4>NAH, I’M GOOD 👎</h4>
                <p>(CAN WE SKIP TO THE GOOD PART?)</p>
            </button>
        </div>
        </div>
    );
};

export default Preloader;
