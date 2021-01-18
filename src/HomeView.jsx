import { Link } from "react-router-dom"

export default (props) => {
    return (
        <>
            <h1>Journal Entries</h1>
            {
                props.categories.map((cat, index) => {
                    return (
                        <section id={index}>
                            <h2>{cat}</h2>
                            <ul>
                                {
                                    props.entries.filter(entry => entry.cat_id == index).map(entry => <li>{entry.entry}</li>)
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
