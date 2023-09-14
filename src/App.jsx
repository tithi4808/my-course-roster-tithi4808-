import Cards from './component/cart/cards'
import Home from './component/Home/home'
import './App.css'


function App() {
  

  return (
    <>
    <h1 className="text-3xl font-semibold text-center my-8 ">
    Course Registration
    </h1>
    <div className='flex gap-4'>
      <Cards></Cards>
      <Home></Home>

    </div>

    </>
  )
}

export default App
