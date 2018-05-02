import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
    // you can set the basename prop in BrowserRouter, by default its set to '/'
    // for example if you were hosting on github i think you'd set it to something like
    // basename="github.com/markhorvath/my-app/"
    //<BrowserRouter basename="my-app" />
      <BrowserRouter>
          <div className="App">
            <Blog />
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
