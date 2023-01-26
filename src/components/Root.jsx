import React from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import App from "../App";
import Blog from "../pages/Blog";
import BlogView from "../pages/BlogView";


const Root = () => {
    return (
        <BrowserRouter>
            <Route path="/blog" component={Blog} />
        </BrowserRouter>
    );
}

export default Root;