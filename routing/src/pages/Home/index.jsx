import { useNavigate } from "react-router-dom"

export const Home = () => {

    const navigate = useNavigate();

    const onCartClick = () => {
        navigate("/cart")
    }

    return (
        <>
        <h1>This is Home page</h1>
        <button onClick={onCartClick}>Add to cart</button>
        </>
    )
}