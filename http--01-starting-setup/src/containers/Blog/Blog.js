import React, { Component } from 'react';
// import axios from 'axios';

// this is from the axios.js file, the instance, it could've been called "import instance"
// but then you'd have to change all the times 'axios' was used in the component below
//import axios from '../../axios';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: 'submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" render={() => <h1>home</h1>} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default Blog;