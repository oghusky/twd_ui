import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TimeLine from '../Timeline';
import Navie from '../../components/NavBar'
import Footer from '../../components/Footer'
import './App.css';

function App() {
  return (
    // <AppContext.Provider value={{posts,setPosts}}>
      <Router>
        <Navie/>
        <Switch>
        <Route exact path="/" component={TimeLine}/>
        </Switch>
        <Footer/>
      </Router>
    // </AppContext.Provider>
  );
}

export default App;
