import { useState } from 'react'
import Loginpage from "./pages/loginpage"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Loginpage/>
    </>
  )
}

export default App
