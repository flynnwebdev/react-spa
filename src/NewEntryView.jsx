import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import StateContext from "./store"

export default (props) => {
    const cat_id = props.match.params.cat_id
    const [entry, setEntry] = useState('')
    const { store, dispatch } = useContext(StateContext)
    const category = store.categories.find(c => c.id == cat_id)
    console.log(store.categories)

    const onSubmit = async (e) => {
        e.preventDefault()
        const res = await fetch('http://localhost:4000/entries', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: entry,
                category_id: cat_id
            })
        })
        const parsedEntry = await res.json()

        dispatch({
            type: 'addEntry',
            entry: parsedEntry
        })

        props.history.push("/")
    }

    return (
        <>
            <Link to="/category"><button>&lt; Back to Categories</button></Link>
            <h1>New {category.name} Entry</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <textarea value={entry} onChange={(e) => setEntry(e.target.value)} />
                </div>
                <button>Create Entry</button>
            </form>
        </>
    )
}