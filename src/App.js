//para navegação entre rotas
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes/Routes';


function App() {
  return (
    <BrowserRouter basename="/react-build">
      <Routes />
    </BrowserRouter>
  );
}

export default App;

