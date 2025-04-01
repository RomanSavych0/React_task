import './App.css';
import {Box, ThemeProvider} from "theme-ui";
import { lightTheme, darkTheme } from "./theme";

import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import  { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

import InputForm from "./components/InputForm.tsx";
import Submissions from "./components/Submissions.tsx";
import ReduxContainer from "./containers/redux.tsx";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            setIsDarkMode(savedTheme === 'dark');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDarkMode ? 'dark' : 'light';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? darkTheme.body : lightTheme.body;
    }, [isDarkMode]);

    return (
        <ReduxContainer >
            <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                <Router>

                    <nav style={{ textAlign: 'center', marginBottom: '20px'  , display:"flex" , columnGap:"20px" , justifyContent:"center"}}>
                        <Link to="/">Form</Link> | <Link to="/submissions">Submissions</Link>
                        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <Box
                                onClick={toggleTheme}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    fontSize: '24px'
                                }}
                            >
                                {isDarkMode ? <FiSun color="white"  /> : <FiMoon  color="black" />}
                            </Box>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<InputForm />} />
                        <Route path="/submissions" element={<Submissions />} />
                    </Routes>

                    <ToastContainer />
                </Router>
            </ThemeProvider>
        </ReduxContainer>
    );
}

export default App;
