import './App.css'
import HomeView from './HomeView'
import CategorySelectionView from './CategorySelectionView'
import NewEntryView from './NewEntryView'
import { useReducer } from 'react'
import { BrowserRouter, Link, Route } from "react-router-dom"
import stateReducer from './stateReducer'
import StateContext from './store'

function App(props) {
  const initialState = {
    categories: ['Food', 'Coding', 'Movies', 'Other'],
    entries: []
  }

  const [store, dispatch] = useReducer(stateReducer, initialState)

  const { categories, entries } = store

  return (
    <StateContext.Provider value={{store, dispatch}}>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> | 
          <Link to="/category">New Entry</Link>
        </nav>
        <Route exact path="/" component={HomeView} />
        <Route exact path="/category" component={CategorySelectionView} />
        <Route exact path="/entry/new/:cat_id" component={NewEntryView} />
      </BrowserRouter>
    </StateContext.Provider>
  )
}

export default App
