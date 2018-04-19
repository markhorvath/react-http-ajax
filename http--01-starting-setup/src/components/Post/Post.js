import React from 'react';
//import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

// withRouter adds router props (like match, history, location) to other components
// in other words its a good way of making a component "route aware"
//export default withRouter(post);

export default post;