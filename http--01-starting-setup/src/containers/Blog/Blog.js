import React, { Component } from 'react';
// import axios from 'axios';

// this is from the axios.js file, the instance, it could've been called "import instance"
// but then you'd have to change all the times 'axios' was used in the component below
//import axios from '../../axios';
import { Route } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';

class Blog extends Component {
    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" render={() => <h1>home</h1>} />*/}
                <Route path="/" exact component={Posts} />
            </div>
        );
    }
}

export default Blog;