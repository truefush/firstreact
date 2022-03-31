import './NavBar.css'

const NavBar = (props)=>{
    return(
        <nav>
            <log>
                <span>Game</span>store
            </log>
            <ul>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Games</a></li>
                <li><a href='#'>List</a></li>
                <li><a href='#'>Status</a></li>
            </ul>
            <h1>{props.name}</h1>
        </nav>
    )
}

export default NavBar