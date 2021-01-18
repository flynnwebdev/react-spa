import logo from './logo.svg'
import './App.css'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'
import { useState } from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom"

function App(props) {
  const [categories, setCategories] = useState(['Food', 'Coding', 'Movies', 'Other'])
  const [entries, setEntries] = useState([])

  function addEntry(cat_id, entry) {
    // update entries state
    // { cat_id, entry }
    setEntries([...entries, { cat_id, entry }])
  }

  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/category">New Entry</Link>
        </nav>
        <Route
          exact
          path="/"
          render={props => <HomeView {...props} categories={categories} entries={entries} />}
        />
        <Route
          exact
          path="/category"
          render={props => <CategorySelectionView {...props} categories={categories} />}
        />
        <Route
          exact
          path="/entry/new/:cat_id"
          render={props => <NewEntryView {...props} addEntry={addEntry} categories={categories} />}
        />
      </BrowserRouter>
    </>
  )
}

export default App
