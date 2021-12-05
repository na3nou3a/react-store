import React, { Component } from 'react';

class Default extends Component {
  render() {
    return (
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col-10 mx-auto text-center text-title text-uppercase pt-5'>
              <h1 className='display-3'>404</h1>
              <h1>error</h1>
              <h2>page not found</h2>
              <h3>the requested URL was not found</h3>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Default;
