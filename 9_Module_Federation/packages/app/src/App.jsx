import React from 'react'
import { 
    BrowserRouter as Router, 
    Switch, 
    Route, 
    Link, 
    BrowserRouter 
} from 'react-router-dom'

import './App.scss'

const App = () => (
    <Router>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </Router>
)

export default App