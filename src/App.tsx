import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Global, ThemeProvider } from '@emotion/react';

import Header from '@/components/Header';
import Home from '@/pages/Home';
import Favorite from '@/pages/Favorite';
import GlobalStyle from '@/theme/globalStyle';

function App() {
  return (
    <Router>
      <Global styles={GlobalStyle} />
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Favorite" exact component={Favorite} />
      </Switch>
    </Router>
  );
}

export default App;
