import './App.css';
import Header from './components/Header'
import SideBar from './components/SideBar'
import Feed from './components/Feed'
function App() {
  return (
    <div className="App">

      <Header/>
      <div className="App_body">      
      <SideBar/>
      <Feed />
      </div>

      
     
    </div>
  );
}

export default App;
 