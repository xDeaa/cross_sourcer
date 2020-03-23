import React from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from '@apollo/react-hooks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import './App.css';
import User from './pages/User'

function App() {
  if(!process.env.REACT_APP_TOKEN) {
    return <h1>You must enter a token</h1>
  }

  const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
      "Authorization": `Bearer ${process.env.REACT_APP_TOKEN}`
    },
  });
  
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/:name" exact component={User} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
}

export default App;
