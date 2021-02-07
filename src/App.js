import React,{Suspense} from 'react';
import './App.css';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import Footer from './containers/Footer/Footer';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from '../src/pages/Homepage';
import StudentsPage from '../src/pages/StudentsPage';
import EditStudent from '../src/pages/EditStudent';
import Connect from './pages/Connect'
import AboutUs from './pages/About';
import Counter from './containers/reduxScreen/Counter/Counter';
import Product from './pages/Product'
import DarkMode from './components/darkMode/DarkMode'
import Button from './components/UI/button/button'
import ScrollArrow from './components/scrollTop/ScrollArrow'
const AddStudent = React.lazy(()=>import('../src/pages/AddStudent')) ;
const App=() =>{

  const [theme, toggleTheme] = DarkMode()
  
return (
  <BrowserRouter>
  <ScrollArrow />
    <div className="App"
      style={{
        backgroundColor: theme === 'dark' ? '#212121' : '#fff',
        color: theme === 'dark' ? '#fff' : '#212121',
        transition: '.2s all',
        textAlign: 'center',
      }}
      > 
        <Toolbar />
        <div style={{marginTop:'70px'}}>
        <Button btnType="dark" clicked={toggleTheme}>Dark Mode</Button>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/students" exact component={StudentsPage} />
            <Route path="/add-student" exact render={()=>(
              <Suspense fallback={<p>...loading</p>}>
                <AddStudent />
              </Suspense>)} 
            />
            <Route path="/student/:studentid" exact component={EditStudent} />
            <Route path="/about-us" exact component={AboutUs} />
            <Route path="/connect" exact component={Connect} />
            <Route path="/redux" exact component={Counter} />
            <Route path="/product/:id" exact component={Product} />
            <Route render={()=><h1>Page Not Found</h1>} />
          </Switch>
          
        </div>
        <Footer />
    </div>
  </BrowserRouter>
    
  );
}


export default App;
