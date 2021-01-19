import { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from './store'

export default () => {
    const { store } = useContext(StateContext)
    return (
        <>
            <h1>Category Selection View</h1>
            <ul>
            {
                store.categories.map((category, index) => 
                    <li key={index}>
                        <Link to={`/entry/new/${index}`}>{category}</Link>
                    </li>
                )
            }
            </ul>
        </>
    )
}
