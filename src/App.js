import React, { Component } from 'react';
import ImageCapture from 'react-image-capture';
import logo from './logo.svg';
import './App.css';

const Filter = ({ filter, applyFilter }) => (
  <p>
    {filter}
    <button onClick={applyFilter(filter)}>apply</button>
  </p>
);

class App extends Component {
  state = {
    imgSrc: 'http://i.imgur.com/tdNOl.png',
    filter: null,
    filterList: [],
  }

  takePicture = (imgSrc) => {
    this.setState({ imgSrc })
  }

  addFilter = () => {
    this.setState({
      ...this.state,
      filterList: [
        ...this.state.filterList,
        this.newFilter.value,
      ],
    });
    this.newFilter.value = '';
  }

  applyFilter = (filter) => () => {
    this.setState({ filter });
  }

  render() {
    const { filter, imgSrc, filterList } = this.state;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div id="imageCapture">
          <ImageCapture takePicture={this.takePicture} />
        </div>
        <div id="filters">
          <div>
            <input type="text" ref={(newFilter) => { this.newFilter = newFilter; }} />
            <button onClick={this.addFilter}>Add new effect</button>
          </div>
          <div>
            {filterList.map(filter => (<Filter key={filter} filter={filter} applyFilter={this.applyFilter} />))}
          </div>
        </div>
        <div id="businessCard">
          <img src={imgSrc} width="300" style={{ filter }} />
        </div>
      </div>
    );
  }
}

export default App;
