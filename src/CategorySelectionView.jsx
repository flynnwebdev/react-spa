import { Link } from "react-router-dom"

export default (props) => {
    return (
        <>
            <h1>Category Selection View</h1>
            <ul>
            {
                props.categories.map((category, index) => 
                    <li key={index}>
                        <Link to={`/entry/new/${index}`}>{category}</Link>
                    </li>
                )
            }
            </ul>
        </>
    )
}
