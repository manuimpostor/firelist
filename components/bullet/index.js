import styles from './styles.module.scss'

const Bullet = (props) => {

  var fileToLoad = "-->"
  if(props.shot) {
    fileToLoad = "../../circle-ok-green.svg"
  }
  else {
    fileToLoad = "../../circle-ok.svg"
  }

  const handleClick = () => {
    props.onShotChange(props.shot)
  }

  return(
    <div className={styles.bullet} onClick={() => handleClick()}>
      <img src={fileToLoad}/>
    </div>
  )
}

export default Bullet
