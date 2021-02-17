import { ApolloClient, gql, ApolloProvider } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

import "./index.css"

const cache = new InMemoryCache()

const client = new ApolloClient({
  cache,
  uri: "http://localhost:4000/graphql"
});

// ...ApolloClient instantiated here...


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);

/*client
  .query({
    query: gql`
      query GetMarket {
        getcoins {
          id
        }
      }
    `
  })
  .then(result => console.log(result));


client
  .query({
    query: gql`
      query TestQuery {
        getcoins {
          id
        }
      }
    `
  })
  .then(result => console.log(result));



/*
import { ApolloClient, ApolloProvider, gql, InMemoryCache } from "@apollo/client";
//import { InMemoryCache } from 'apollo-cache-inmemory';
//import { HttpLink } from 'apollo-link-http';
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import Pages from "./pages"

//import { cache } from "./cache"

//import gql from 'graphql-tag';

//const cache = ;
//const link = new HttpLink({
  
//});

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache()
});

// ...ApolloClient instantiated here...

client
  .query({
    query: gql`
      query getcoins {
        id
        symbol
        name
        nameid
      }  `
  })
  .then(result => console.log(result));

  /*function App() {
    return (
      <ApolloProvider client={client}>
        <div>
          <h2>My first Apollo app 🚀</h2>
        </div>
      </ApolloProvider>
    );
  }*/
  
 // render(<App />, document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));
/*
  ReactDOM.render(
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>,
    document.getElementById("root")
  );


import { gql,ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
//import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';

/*const cache = new InMemoryCache()
const link = new HttpLink({
  uri: 'http:localhost:4000/'
});

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

client
  .query({
    query: gql`
      query getcoins {
        id
        symbol
        name
        nameid
      }  `
  })
  .then(result => console.log(result));


  ReactDOM.render(
    <ApolloProvider client={client}>
      <App></App>
    </ApolloProvider>,
    document.getElementById("root")
  );


export default client;
*/

