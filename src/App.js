import './App.css';
import PersonSearchApplication from './applications/PersonSearch';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div id="main-container" className="App">
      <ApolloProvider client={client}>
        <PersonSearchApplication />
      </ApolloProvider>
    </div>
  );
}

export default App;
