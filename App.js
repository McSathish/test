
import './App.css';
import './head.css';
import './footer.css';
import './all.css';
import './myup.css';
import Home from './home';
import Forget from './forget';
import About from "./about";
import Login from "./login";
import Collection from "./collection";
import Contect from "./contect";
import Faq from "./faq";
import Accessories from "./acc";
import { useEffect,useState } from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";
import Product from './Product';
import { Provider } from 'react-redux';
import { CartProvider } from "react-use-cart";
import store from './Redux/store';
import Car from './car';
import Shop from './shop';
import Sear from './sear';
import Back from './back';
import Carted from './newcart';
import Page from './pagenew';
import Load from './load';
import Reg from './reg';
import Notfound from './notfound';
import Paymant from './paymant';
import { Tab } from 'react-bootstrap';
import Find from './find';

function App() {

  const[loading,setLoading]=useState(false);
  useEffect(()=>{
setLoading(true)
setTimeout(()=>{
  setLoading(false)
  },1000)
},[])

  return (
  <div className='app'>
  {loading ?
       <ClipLoader
       color={'#763d3d'}
       loading={loading}
       className={'load'}
       size={150}
       aria-label="Loading Spinner"
       data-testid="loader"
     />: <CartProvider>
         {/* <Page/> */}
         {/* <Carted/> */}
  

  <Provider store={store}>
  <Router>
  <Routes>
     <Route exact path='/' element={<Login/>}> </Route> 
    <Route  path='/about' element={<About/>}> </Route> 
     <Route  path='/home' element={<Home/>}> </Route> 
     <Route  path='/sear' element={<Sear/>}> </Route> 
     <Route  path='/forget' element={<Forget  />}> </Route> 
     <Route  path='/find' element={<Find/>}> </Route> 
     <Route  path='/back' element={<Back/>}> </Route> 
     <Route  path='/collection' element={<Collection/>}> </Route> 
     <Route  path='/contect' element={<Contect/>}> </Route> 
     <Route  path='/faq' element={<Faq/>}> </Route> 
     <Route  path='/acc' element={<Accessories/>}> </Route> 
      {/* <Route  path='/pagenew' element={<Page/>}> </Route>  */}
     <Route  path='/newcart' element={<Carted/>}> </Route> 
     <Route  path='/table' element={<Tab/>}> </Route> 
     <Route  path='/load' element={<Load/>}> </Route> 
     <Route  path='/paymant' element={<Paymant/>}> </Route> 
     <Route  path='/notfound' element={<Notfound/>}> </Route> 
     <Route  path='/car' element={<Car/>}> </Route> 
     <Route  path='/shop' element={<Shop/>}> </Route> 
     <Route  path='/Product/:id' element={<Product/>}> </Route> 
     <Route  path='/reg' element={<Reg/>}> </Route> 
     <Route path="/pagenew" element={<Page/>}></Route>
     
  </Routes>
</Router>
</Provider> 
</CartProvider>

}
  </div>
  );
}

export default App;
