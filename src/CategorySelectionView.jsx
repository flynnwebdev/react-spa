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
                store.categories.map(category => 
                    <li key={category.id}>
                        <Link to={`/entry/new/${category.id}`}>{category.name}</Link>
                    </li>
                )
            }
            </ul>
        </>
    )
}
