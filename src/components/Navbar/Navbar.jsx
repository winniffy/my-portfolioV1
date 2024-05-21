import './Navbar.css'

// nav items array
const NavItems = [
    { item: 'HOME'},
    { item: 'PROJECTS'},
    { item: 'ABOUT ME'},
    { item: 'CONTACT'},
];

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul className="nav_group">
            {NavItems.map((nav, index) => (
                <li className='nav_item' key={index}>
                    <a href="#" className="nav_link" >
                        {nav.item}
                    </a>
                </li>
            ))
            }
        </ul>
    </nav>
  )
}

export default Navbar