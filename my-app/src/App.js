
import './App.css';
import Header from './components/header';
import Sidebar from './components/sidebar';
import Popular from './pages/mainpage';

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <Popular />
    </div>
  );
}

export default App;
