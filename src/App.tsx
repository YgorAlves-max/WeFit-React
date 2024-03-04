import { Outlet } from 'react-router';
import "./App.css";
import UINavBar from './shared/components/UINavBar';

const App = () => {
    return (
        <>
            <div className="App">
                <UINavBar />
                <Outlet />
            </div>
        </>
    )
}

export default App