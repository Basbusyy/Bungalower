import { ToastContainer } from 'react-toastify';
import './App.css';
import Router from './route/Router';
import './style.css';
function App() {
  return (
    <>
      <Router />
      <ToastContainer autoClose="2500" theme="dark" position="bottom-right" />
    </>
  );
}

export default App;
