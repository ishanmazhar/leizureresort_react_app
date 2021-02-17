import './App.css';
import Main from './components/Main';
import ScrollToTop from './components/ScrollToTop'; 
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
        <div>
          <Main /> 
        </div>
    </BrowserRouter>
  );
}

export default App;
