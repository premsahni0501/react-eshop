import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';

class App extends React.Component {
  state = {
    counter: 0
  }
  runCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        {/* <Router basename={process.env.PUBLIC_URL}>
          <Route path="/" component={Home} exact/>
        </Router> */}
        <Home/>
      </div>
    );
  }
}
export default App;
