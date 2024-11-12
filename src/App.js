import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppRouter from './routes/AppRouter';
import { useContext } from 'react';
import { Store } from './context/context';

function App() {
  const { mode } = useContext(Store)
  return (
    <div className={`App ${mode}`}>
      <AppRouter />
    </div>
  );
}

export default App;
