import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '@/components/Header';
import Home from '@/pages/Home';
import Favorite from '@/pages/Favorite';
import ScrollEvent from '@/pages/ScrollEvent';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Favorite" exact component={Favorite} />
        <Route path="/ScrollEvent" exact component={ScrollEvent} />
      </Switch>
    </Router>
  );
}

export default App;
