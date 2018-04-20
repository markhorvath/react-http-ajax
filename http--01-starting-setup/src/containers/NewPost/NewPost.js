import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    componentDidMount() {
        // logic to check if user is authorized to proceed,
        // if unauth => this.props.history.replace("/posts"); another example of a guard
        console.log(this.props);
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts/', data)
            .then(response => {
                console.log(response);
                //this.props.history.push('/posts/'); this "pushes" the page onto the stack ie
                //i guess its a array of these pages, so if you hit back after submitted a new
                //post it will go back to the new post form

                //using replace here acts like redirect, so if you start at home/Posts, then
                //click New Post, then submit something, it will return you to home/Posts,
                //but if you hit back it will go back to the first home/Posts you started at
                //because the New Post you were on is "replaced" by Posts ('/posts/')
                this.props.history.replace('/posts/');
                //this.setState({submitted: true});
            });
    }

    render () {
        // Conditional Redirects, added submitted boolean to state then put in logic below
        // to test for truthiness of submitted which will then render the redirect variable
        // if true
        let redirect = null;
        if (this.state.submitted === true) {
            redirect = <Redirect to="/posts" />;
        }
        return (
            <div className="NewPost">
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;