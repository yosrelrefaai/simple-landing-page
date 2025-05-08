import './App.css';
import Header from './Header';
import Home from './Home';
import FirstChallenge from './FirstChallenge';
import SecondChallenge from './SecondChallenge';
import ThirdChallenge from './ThirdChallenge';

import Footer from './Footer';
import { Route,Link,Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logobw from './images/logob&w.png';

function App() {
  const[loading,setloading]=useState(true);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setloading(false)
    },5000);
    return ()=>clearTimeout(timer)
  },[]);
  if(loading){
    return(
      <div className='fixed inset-0 bg-white z-50 flex flex-col justify-center items-center'>
      <div className="w-32 h-32 relative">
         <img
         src={logobw} alt='logo' className='w-full h-full object-contain animate-wave'
         />
      </div>
      
      </div>
    )
  }
  return (
      <div>
        <Header/>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/challenge1' element={<FirstChallenge/>}/>
          <Route path='/challenge2' element={<SecondChallenge/>}/>
          <Route path='challenge3'  element={<ThirdChallenge/>}/>
        </Routes>
         <Footer/>
      </div>
     
   
   
  );
}

export default App;
