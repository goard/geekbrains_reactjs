import { useCallback, useState } from 'react'
import FirebaseApp from '../config/FirebaseConfig'

export const useDataBase = () => {
  const [loading, setLoading] = useState(false)

  const pushData = useCallback(async (path, form) => {
    setLoading(true)
    try {
      let obj = {}
      obj.res = await FirebaseApp.database()
        .ref(path)
        .push(form, (error) => {
          if (error) obj.res = 'Ошибка'
          else obj.res = 'Сохранен'
        })
      setLoading(false)
      return obj
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [])

  // const transactionData = useCallback(async (path, form) => {
  //   setLoading(true);
  //   try {
  //     const res = await FirebaseApp.database().ref(path).transaction(data => {

  //     })
  //   } catch (error) {
  //     setLoading(false);
  //     console.log(error);
  //   }
  // }, []);

  const updateData = useCallback(async (path, form) => {
    setLoading(true)
    try {
      let res = ''
      await FirebaseApp.database()
        .ref(path)
        .update(form, (error) => {
          if (error) res = 'Ошибка'
          else res = 'Сохранен'
        })
      setLoading(false)
      return res
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [])

  const removeData = useCallback(async (path) => {
    try {
      let res = ''
      await FirebaseApp.database()
        .ref(path)
        .remove()
        .then(function () {
          res = 'succes'
        })
        .catch(function (error) {
          res = 'error'
        })
      return res
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getDataOn = useCallback(async (path) => {
    let data = null
    try {
      const res = await FirebaseApp.database()
        .ref(path)
        .on('value', (snapshot) => {
          data = snapshot.val()
        })
      const payload = Object.keys(data || 0).map((key) => {
        return {
          ...res[key],
          id: key,
        }
      })
      return payload
    } catch (error) {
      console.log(error)
    }
  }, [])

  const getData = useCallback(async (url, userUid) => {
    setLoading(true)
    try {
      const res = await FirebaseApp.database()
        .ref(`${url}/${userUid}`)
        .once('value')
        .then((snapshot) => snapshot.val())
      if (url === 'mastersList' || url.split('/')[0] === 'recordsList') {
        setLoading(false)
        return res
      } else {
        const payload = Object.keys(res || 0).map((key) => {
          return {
            ...res[key],
            id: key,
          }
        })
        setLoading(false)
        return payload
      }
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }, [])

  return { loading, pushData, getDataOn, getData, removeData, updateData }
}
