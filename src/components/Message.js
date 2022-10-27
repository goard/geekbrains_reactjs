import style from './Message.module.css'

export const Message = ({ text }) => {
  return (
    <>
      <p className={style.Message}>{text}</p>
    </>
  )
}
