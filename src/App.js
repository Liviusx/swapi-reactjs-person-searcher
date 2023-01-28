import './App.css';
import Search from './applications/SwapiCharacterSearcher';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: "http://localhost:4002/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <Search />
      </ApolloProvider>
    </div>
  );
}

export default App;
