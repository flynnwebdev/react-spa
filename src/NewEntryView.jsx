import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import StateContext from "./store"

export default (props) => {
    const cat_id = props.match.params.cat_id
    const [entry, setEntry] = useState('')
    const { store, dispatch } = useContext(StateContext)

    const onSubmit = (e) => {
        e.preventDefault()
        // props.addEntry(cat_id, entry)
        dispatch({
            type: 'addEntry',
            cat_id,
            entry
        })

        props.history.push("/")
    }

    return (
        <>
            <Link to="/category"><button>&lt; Back to Categories</button></Link>
            <h1>New {store.categories[cat_id]} Entry</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <textarea value={entry} onChange={(e) => setEntry(e.target.value)} />
                </div>
                <button>Create Entry</button>
            </form>
        </>
    )
}