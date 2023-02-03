
const items = [
    {
        name: "home",
        ref : "#"
    },
    {
        name: "about",
        ref: "#"
    },
    {
        name: "menu",
        ref: "#"
    },
    {
        name: "reservations",
        ref: "#"
    },
    {
        name: "order online",
        ref: "#"
    },
    {
        name: "login",
        ref: "#"
    }
]

const Nav = () => {
    return (
        <nav>
            {items.map((project) => (<li><a href= {project.ref}>{project.name}</a></li>))}
        </nav>
    )
}

export default Nav