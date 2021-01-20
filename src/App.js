import './App.css'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'
import { useEffect, useReducer } from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom"
import stateReducer from './stateReducer'
import StateContext from './store'

function App(props) {
  const initialState = {
    categories: [],
    entries: [],
    loading: true
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)

  const { categories, entries } = store

  useEffect(async () => {
    let res = await fetch("http://localhost:4000/entries")
    const entries = await res.json()
    dispatch({
      type: 'setEntries',
      entries
    })
    res = await fetch("http://localhost:4000/categories")
    const categories = await res.json()
    dispatch({
      type: 'setCategories',
      categories
    })
    dispatch({
      type: 'setLoading',
      value: false
    })
  }, [])

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |
          <Link to="/category">New Entry</Link>
        </nav>
        {store.loading ? (
          <h3>Loading ...</h3>
        ) : (
            <>
              <Route exact path="/" component={HomeView} />
              <Route exact path="/category" component={CategorySelectionView} />
              <Route exact path="/entry/new/:cat_id" component={NewEntryView} />
            </>
          )}
      </BrowserRouter>
    </StateContext.Provider>
  )
}

export default App
