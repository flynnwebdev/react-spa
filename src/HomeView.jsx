import { useContext } from "react"
import { Link } from "react-router-dom"
import StateContext from "./store"

export default () => {
    const { store } = useContext(StateContext)
    const { categories, entries } = store
    return (
        <>
            <h1>Journal Entries</h1>
            {
                categories.map(cat => {
                    return (
                        <section id={cat.id}>
                            <h2>{cat.name}</h2>
                            <ul>
                                {
                                    entries.filter(entry => entry.category_id == cat.id).map((entry, index) => <li key={index}>{entry.content}</li>)
                                }
                            </ul>
                        </section>
                    )
                })
            }
            <Link to="/category">Create New Entry</Link>
        </>
    )
}
