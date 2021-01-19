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
                categories.map((cat, index) => {
                    return (
                        <section id={index}>
                            <h2>{cat}</h2>
                            <ul>
                                {
                                    entries.filter(entry => entry.cat_id == index).map((entry, index) => <li key={index}>{entry.entry}</li>)
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
