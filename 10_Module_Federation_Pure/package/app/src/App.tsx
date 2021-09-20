import React, { Suspense } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';


const HomePage = React.lazy(() => import("HomeApp/HomePage"));
const ContactPage = React.lazy(() => import("ContactApp/ContactPage"));

import './App.css'

const App: React.VFC = () => (
    <Router>
        <div className="app">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>

        <Switch>
            <Route exact path="/">
                <Suspense fallback={<div>Loading...</div>}>
                    <HomePage />
                </Suspense>
            </Route>
            <Route exact path="/contact">
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactPage />
                </Suspense>
            </Route>
        </Switch>
    </Router>
)

export default App