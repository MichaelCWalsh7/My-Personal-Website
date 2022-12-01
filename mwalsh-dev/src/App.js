import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  { BreakpointProvider } from 'react-socks'
import Header from './components/common/header/Header';

function App() {

    return (
        <BreakpointProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' exact />
                </Routes>
            </Router>
        </BreakpointProvider>
    );
}

export default App;
