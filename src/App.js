
import './App.css';
import Footer from './Components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Moviedetails from './Components/Moviedetails';
import Navbar from './Components/Navbar'
import Recommended from './Components/Recommended';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Moviedetails/>
      <Recommended/>
      <Footer/>
    </div>
  );
}

export default App;
