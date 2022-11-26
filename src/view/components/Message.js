import { useState, useRef, useEffect } from 'react'
import style from './Message.module.css'

export const Message = (props) => {
  const { data } = props
  const refInput = useRef()
  const [formList, setFormLst] = useState('')
  const [send, setSend] = useState(0)

  const handlerSubmit = (event) => {
    event.preventDefault()
    setTimeout(() => {
      alert(`Author: ${data.name}, Text submit: ${formList}`)
      setSend((prev) => prev + 1)
    }, 1500)
  }

  useEffect(() => {
    refInput.current?.focus()
  }, [send])

  return (
    <>
      <form onSubmit={handlerSubmit}>
        <input
          className={style.Message}
          type="text"
          value={formList}
          onChange={(event) => {
            setFormLst(event.target.value)
          }}
          ref={refInput}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
