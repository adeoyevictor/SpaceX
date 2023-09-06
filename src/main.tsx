import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { UserContextProvider } from './context/UserContext.tsx';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// Create an Apollo Client instance and configure it with your API endpoint
const client = new ApolloClient({
  uri: 'https://spacex-production.up.railway.app/',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Router>
    <UserContextProvider>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </UserContextProvider>
  </Router>
);
