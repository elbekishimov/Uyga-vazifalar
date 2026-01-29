import './App.css'
import { Card } from './Components/db'
import MainPage from './MainPage'
import NavbarPage from "./NabarPage"

function App() {
  return (
    <>
      <NavbarPage/>

      {Card.map((car, index) => (
        <MainPage car={car} />
      ))}

    </>
  )
}

export default App
