import { useState } from 'react'
import style from './Message.module.css'

export const Message = (props) => {
  const { data } = props
  const [formList, setFormLst] = useState('')

  const handlerSubmit = (event) => {
    event.preventDefault()
    setTimeout(() => {
      alert(`Author: ${data.name}, Text submit: ${formList}`)
    }, 1500)
  }

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
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}
