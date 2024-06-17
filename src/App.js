import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  console.log();
  return (
    <div>
      <Header name = "Netflix top 10"/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
