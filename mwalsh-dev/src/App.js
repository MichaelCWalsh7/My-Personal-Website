import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={
                    <h1>Hello World</h1>
                } />
            </Routes>
        </Router>
    );
}

export default App;
