import { useState, useRef, useEffect } from 'react'
import style from './Message.module.css'
import { useDispatch } from 'react-redux'
import { addMessage } from '../../features/fetchApiSlice'

export const Message = () => {
  const dispatch = useDispatch()
  const refInput = useRef()
  const [formList, setFormLst] = useState({
    userId: null,
    id: null,
    title: '',
    body: '',
  })
  const [send, setSend] = useState(0)

  const randomId = () => {
    return Math.floor(Math.random() * 10)
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    const userId = randomId()
    const id = Date.now()
    setFormLst({ ...formList, userId, id })
    setTimeout(() => {
      dispatch(addMessage(formList))
      setSend((prev) => prev + 1)
      setFormLst({ userId: null, title: '', body: '' })
    }, 1000)
  }

  useEffect(() => {
    refInput.current?.focus()
  }, [send])

  return (
    <div>
      <p>Send message</p>
      <form
        onSubmit={handlerSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <input
          name="title"
          className={style.Message}
          type="text"
          value={formList.title}
          placeholder="title"
          onChange={(event) => {
            setFormLst({ ...formList, [event.target.name]: event.target.value })
          }}
          ref={refInput}
        />
        <input
          name="body"
          className={style.Message}
          type="text"
          value={formList.body}
          placeholder="body"
          onChange={(event) => {
            setFormLst({ ...formList, [event.target.name]: event.target.value })
          }}
          ref={refInput}
        />

        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
