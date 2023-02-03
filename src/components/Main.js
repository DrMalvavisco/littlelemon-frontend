import food from "../assets/img/restauranfood.jpg"

const main_header = "Little Lemon"
const location = "Chicago"
const description = "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist."
const cta_text = "Reserve a Table"
const Main = () => {
    return (
        <section>
            <div>
                <h1>{main_header}</h1>
                <h3>{location}</h3>
                <p>{description}</p>
                <button>{cta_text}</button>
            </div>
            <img src={food}/>
        </section>
    )
}

export default Main