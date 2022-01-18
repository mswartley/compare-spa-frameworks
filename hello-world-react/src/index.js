import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App';
import About from "./routes/About";
import Dialogs from "./routes/Dialogs";
import Forms from "./routes/Forms";
import Home from "./routes/Home";
import Jokes from "./routes/Jokes";
import Simple from "./routes/Simple";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path="simple" element={<Simple/>}/>
                    <Route path="jokes" element={<Jokes/>}/>
                    <Route path="forms" element={<Forms/>}/>
                    <Route path="dialogs" element={<Dialogs/>}/>
                </Route>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
