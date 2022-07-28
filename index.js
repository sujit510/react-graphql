import React from 'react'
// import reactDom from "react-dom";
import App from './src/App'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
})

// reactDom.render(<App />, document.getElementById("root"));
// reactDom.cre
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<ApolloProvider client={client}>
    <App />
  </ApolloProvider>)
