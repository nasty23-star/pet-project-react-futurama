
import './App.css';
import About from './About';
import Name from './Name';
import QuizFuturama from './QuizFuturama';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div style={{ backgroundColor: "rgb(78, 140, 190)" }}>
      
      <Name />
      <QuizFuturama />
      <About />
      <Button variant="light" size="sm"><a href="https://clck.ru/VXmeQ">Leela</a></Button>
      <Button variant="secondary" size="sm"><a href="https://clck.ru/VXmiN">Bender</a></Button>
      <Button variant="light" size="sm"><a href="https://clck.ru/DpmZc">Fry</a></Button>
    </div>
  );
}

export default App;
