import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import { Message } from './components/Message'

function App() {
  const [messageList, setMessageList] = useState([])

  useEffect(() => {
    ;(async function () {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users?_start=0&_end=3'
      )
      const data = await response.json()
      setMessageList(data)
    })()
  }, [])

  return (
    <div className="App">
      {messageList.map((el) => (
        <div key={el.id}>
          <p>Name: {el.name}</p>
          <p>Email: {el.email}</p>
          <p>Phone: {el.phone}</p>
          <Message data={el} />
          <hr />
        </div>
      ))}
    </div>
  )
}

export default App
