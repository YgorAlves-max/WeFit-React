import React from 'react'
import NavBar from './shared/components/NavBar'
import { Outlet } from 'react-router'
import "./App.css";

const App = () => {
    return (
        <>
            <div className="App">
                <NavBar />
                <Outlet />
            </div>
        </>
    )
}

export default App