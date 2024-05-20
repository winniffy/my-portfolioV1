
// nav items array
const NavItems = [
    { item: 'HOME'},
    { item: 'PROJECTS'},
    { item: 'ABOUT ME'},
    { item: 'CONTACT'},
];

const Navbar = () => {
  return (
    <nav className="nav">
        <ul className="nav_group">
            {NavItems.map((nav, index) => (
                <a href="#" className="nav_link" key={index}>
                    {nav.item}
                </a>
            ))

            }
        </ul>
    </nav>
  )
}

export default Navbar