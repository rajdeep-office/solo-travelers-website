import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Budget from './pages/Budget';
import Flights from './pages/Flights';
import Airbnb from './pages/Airbnb';
import Chat from './pages/Chat';
import './assets/styles/theme.css';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/destinations" component={Destinations} />
          <Route path="/budget" component={Budget} />
          <Route path="/flights" component={Flights} />
          <Route path="/airbnb" component={Airbnb} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;