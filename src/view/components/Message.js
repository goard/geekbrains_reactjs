import { useState, useRef, useEffect } from 'react'
import style from './Message.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../../features/fetchApiSlice'
import { changeInput, clearForm } from '../../features/formSlice'
import InputCustom from '../ui/Input'
import ButtonCustom from '../ui/Button'

export const Message = () => {
  const dispatch = useDispatch()
  const formInput = useSelector((state) => state.form.form)
  const refInput = useRef()
  const [send, setSend] = useState(0)

  const randomId = () => {
    return Math.floor(Math.random() * 10)
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
    const userId = randomId()
    const id = Date.now()

    setTimeout(() => {
      dispatch(addMessage({ ...formInput, userId, id }))
      dispatch(clearForm())
      setSend((prev) => prev + 1)
    }, 1000)
  }

  const handleChange = (event) => {
    dispatch(changeInput({ [event.target.name]: event.target.value }))
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
          marginBottom: '55px',
        }}
      >
        <InputCustom
          name="title"
          className={style.Message}
          type="text"
          value={formInput.title}
          placeholder="title"
          onChange={handleChange}
          inputRef={refInput}
        />
        <InputCustom
          name="body"
          className={style.Message}
          type="text"
          value={formInput.body}
          placeholder="body"
          onChange={handleChange}
          inputRef={refInput}
        />

        <ButtonCustom type="submit" variant="contained">
          Submit
        </ButtonCustom>
      </form>
    </div>
  )
}
