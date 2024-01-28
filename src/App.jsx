
import './App.css'
import Marquee from "react-fast-marquee";
import nike from "../src/assets/marqee-image/Nike-Logo.png"
import microsoft from "../src/assets/marqee-image/microsoft.jpg"
import tommy from "../src/assets/marqee-image/Tommy-Hilfiger-logo.png"
import Faq from './components/faq';
import Home from './Pages/Home/Home';

function App() {

  return (
    <>
    <Home></Home>
    
      <div className='max-w-[1200px] mx-auto p-12'>
      <h1 className='font-bold text-3xl pb-8'>React Marquee test</h1>
        <Marquee gradient="true" speed={30}>
          <div className='w-40 px-3'>
            <img src={nike} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={microsoft} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={tommy} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={nike} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={microsoft} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={tommy} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={nike} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={microsoft} alt="Nike" />
          </div>
          <div className='w-40 px-3'>
            <img src={tommy} alt="Nike" />
          </div>    
        </Marquee>
      </div>
      <Faq></Faq>

      

    </>
  )
}

export default App
