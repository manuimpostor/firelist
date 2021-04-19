import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import styles from './styles.module.scss'

class Countdown extends React.Component {
  state = {
    timerTime: 25*60*1000, //25min base time
    sessionCount: 0,
    isBreak: false,
    isTicking: false,
  }

  playGong = () => {
    const gong = document.getElementsByClassName("audioElement")[0]
    gong.play()
  }

  startTimer = (isBreak) => {
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 100
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime,
          isBreak: isBreak,
          isTicking: true,
        })
      }
      else {
        clearInterval(this.timer)
        this.setState({
          isTicking: false
        })
        if(isBreak) {
          alert("Break Done")
          this.playGong();
        }
        else {
          this.setState({
            sessionCount: this.state.sessionCount + 1
          })
          this.playGong();
          alert("Session Done")
        }
      }
    }, 100)
  }

  stopTimer = () => {
    clearInterval(this.timer)
  }

  goSession = () => {
    const sessionDuration = 25*60*1000
    this.setState({
      timerTime: sessionDuration
    })
    clearInterval(this.timer)
    this.startTimer(false)
  }

  goBreak = () => {
    const sessionDuration = 5*60*1000
    this.setState({
      timerTime: sessionDuration
    })
    clearInterval(this.timer)
    this.startTimer(true)
  }

  render(){
    const { timerTime, isBreak, isTicking, sessionCount } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="Countdown">
        <audio className="audioElement"><source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"/></audio>
        <Helmet defer={false}><title> {minutes} : {seconds} </title></Helmet>
        <div className={styles.countdown}>
          <div className={styles.counterBtn} onClick={this.goSession}>🚀 25</div>
          <div className={styles.counterBtn} onClick={this.goBreak}>🧘 5</div>
          { isBreak && isTicking && (<div> 🧘 ⏰ {minutes} min : {seconds} </div>) }
          { !isBreak && isTicking && (<div> 🚀 ⏰ {minutes} min : {seconds} </div>) }
        </div>
      </div>
    )
  }
}

// move back to render method if I want { !isTicking && (<div>completed session: {sessionCount}</div>) }
export default Countdown
