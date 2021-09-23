import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Home } from './pages/home';
import { DocumentDetails } from './pages/document-details';
import { MasterList } from './pages/document-masterlist';

import "./App.css"

const App = () => {
  const [busca, setBusca] = useState('');
  const handleSearch = (captura) => {
    setBusca(captura)
  }
  return (
    <Router>
      <Navbar />
      <main className="content--container">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/list" exact>
            <MasterList busca={busca} handleSearch={handleSearch} />
          </Route>
          <Route path="/document-details/:id" exact component={DocumentDetails} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;