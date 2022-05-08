import { useState } from 'react'
import Sidebar from './components/sidebar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Sidebar />
    </div>
 
  )
}

export default App
