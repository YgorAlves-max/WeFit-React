import { Outlet } from 'react-router';
import "./App.css";
import NavBarComponent from './shared/components/NavBarComponent';

const App = () => {
    return (
        <>
            <div className="App">
                <NavBarComponent />
                <Outlet />
            </div>
        </>
    )
}

export default App