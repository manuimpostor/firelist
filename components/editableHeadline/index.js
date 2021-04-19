import { useState, useEffect } from "react";
import styles from './styles.module.scss'
import ContentEditable from 'react-contenteditable'
import usePrevious from '../../helper/usePrevious'

const EditableHeadline = ({ fireType, fetchedTitle, userId }) => {

  const [title, setTitle] = useState(fetchedTitle);
  const prevTitle = usePrevious(title)

  // update database here if blocks get added or removed
  useEffect(() =>{
    const pushTitleToServer = async (title) => {
      const pushBody = () => {
        if(fireType === "primaryFire"){
          return { userId: userId, primaryTitle: title }
        }
        if(fireType === "secondaryFire"){
          return { userId: userId, secondaryTitle: title }
        }
        if(fireType === "dumpsterFire"){
          return { userId: userId, dumpsterTitle: title }
        }
      }

      const fetchUrl = `${process.env.SERVER_URL}/fires`
      try {
        await fetch (fetchUrl, {
          method: "PUT",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(pushBody()),
        })
      } catch(err) { console.log(err)}
    }
    if (prevTitle && prevTitle !== title) {
      pushTitleToServer(title)
    }
  }, [title, prevTitle])

  const handleHTMLChange = (e) => {
    setTitle(e.target.value)
  }

  return(
    <ContentEditable
      className={styles.headline}
      html={title}
      onChange={handleHTMLChange}
    />
  )
}

export default EditableHeadline
