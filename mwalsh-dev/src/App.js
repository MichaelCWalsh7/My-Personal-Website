import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/common/header/Header';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' exact />
            </Routes>
        </Router>
    );
}

export default App;
