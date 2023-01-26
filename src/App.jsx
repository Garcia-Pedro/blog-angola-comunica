/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import {Route, Routes} from 'react-router-dom';

/*------------------- Pages ---------------------*/
import Blog from "./pages/Blog";
import Home from './pages/Home';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import BlogView from "./pages/BlogView";


/*------------- CSS -------------*/
import './App.scss';

const App = () => (
    <Routes>
        <Route path="/" element={< Home/>}/>
        <Route exact path="/blog" element={<Blog />}/>
        <Route exact path="/blog_view" element={<BlogView />}/>
        <Route exact path = "/signIn" element = {<SignIn />} />
        <Route exact path = "/signUp" element = {<SignUp />} />
    </Routes>
);
export default App;