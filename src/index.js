import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/navigation';
import About from './components/about';
import Menu from './components/menu';
import Info from './components/info';


class App extends React.Component {
  render() {
    return(
      <div>
        <Navigation/>
        <About />
        <Menu />
        <Info />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
