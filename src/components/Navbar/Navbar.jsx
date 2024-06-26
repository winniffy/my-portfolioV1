import { useState } from "react";
import "./Navbar.css";
import { AnimatePresence, motion} from "framer-motion";

// nav items array
const NavItems = [
    { item: "HOME" },
    { item: "PROJECTS" },
    { item: "ABOUT ME" },
    { item: "CONTACT" },
];

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    function showMenu() {
        setOpenMenu(!openMenu);
    }

    return (
        <>
        <nav className="navbar">
            {/* desktop menu */}
            <ul className="nav_group">
            {NavItems.map((nav, index) => (
                <li className="nav_item" key={index}>
                <a href="#" className="nav_link">
                    {nav.item}
                </a>
                </li>
            ))}
            </ul>

            {/* mobile nav */}
            <ul className="nav_group-mobile">
            <h2 className="hero_logo hero_logo-mobile">w.</h2>
            <p className="menu_hamburger" onClick={showMenu}>
                MENU
            </p>
            </ul>
        </nav>

        {/* mobile menu */}
        <AnimatePresence>
            {openMenu && (
            <motion.ul
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{duration: .2}}
                exit={{ opacity: 0, x: -100 }}
                className="mobile_menu-container"
            >
                {/* mode toggler button */}
                <li>
                <button className="mode_btn-mobile">DARK MODE</button>
                </li>

                {/* menu items */}
                {NavItems.map((nav, index) => (
                <li className="nav_item" key={index}>
                    <a href="#" className="nav_link">
                    {nav.item}
                    </a>
                </li>
                ))}

                {/* close menu button */}
                <li>
                <button onClick={showMenu} className="close_btn-container">
                    <box-icon name="x" size="4.5rem" color="#928F8E50"></box-icon>
                    <p className="close_text">CLOSE</p>
                </button>
                </li>
            </motion.ul>
            )}
        </AnimatePresence>
        </>
    );
};

export default Navbar;
