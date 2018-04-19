import React, { Component } from 'react';
// import axios from 'axios';

// this is from the axios.js file, the instance, it could've been called "import instance"
// but then you'd have to change all the times 'axios' was used in the component below
//import axios from '../../axios';
import { Route, NavLink } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';

class Blog extends Component {
    render () {


        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                    {/* exact added as a prop to NavLink here so that it can get the .active class */}
                {/* activeClassName="active" is just there to show you can change the name to whatever you want,
                here it's redundant because the default class name is already 'active' */}
                            <li><NavLink
                                to="/"
                                exact
                                activeClassName="my-active"
                                activeStyle={{color: '#42f44b', textDecoration: 'underline'}}>Home</NavLink></li>
                            {/* pathname: this.props.match.url + '/new-post' is the relative
                        way of appending a new path to the current one*/}
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: 'submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" render={() => <h1>home</h1>} />*/}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" component={NewPost} />
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Blog;