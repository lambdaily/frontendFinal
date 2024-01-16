
import { Link } from 'react-router-dom';
import Login from './Components/Login';

const App: React.FC = () => {


  return (
    <div>
      <h1>Menu principal</h1>
      <Login />
      <Link to="/view">IR A view</Link>
    </div>
  );
};

export default App;
