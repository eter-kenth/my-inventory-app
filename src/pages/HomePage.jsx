import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'

function HomePage() {  
  return(
   <>
     <Header/>
     <div className='flex flex-col items-center justify-center h-[calc(100vh-100px)]'>   
       <div className='bg-white h-[400px] w-[300px] flex items-center justify-center rounded-2xl shadow-md'>
        <h1 className='text-black'>welcome to my inventory app</h1>
       </div>
     </div>
       
     <Footer/>
   </>
  );
 
}
 
  

export default HomePage;
