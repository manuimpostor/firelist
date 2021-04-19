import react from 'react'
import ContentEditable from 'react-contenteditable'
import styles from './styles.module.scss'
import Bullet from '../bullet'

class EditableBlock extends React.Component {
  constructor(props){
    super(props)
    this.handleHTMLChange = this.handleHTMLChange.bind(this);
    this.handleShotChange = this.handleShotChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.htmlRef = react.createRef();
    this.state = {
      html: "",
      shot: false,
      previousKey: null,
    }
  }

  componentDidMount() {
    this.htmlRef.current.addEventListener('keydown', this.handleKeyDown)
    this.htmlRef.current.focus()
    this.setState({
      ...this.state,
      html: this.props.html,
      shot: this.props.shot,
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const htmlChanged = prevState.html !== this.state.html
    const shotChanged = prevState.shot !== this.state.shot
    if (htmlChanged || shotChanged){
      this.props.updateBlock({
        _id: this.props._id,
        html: this.state.html,
        shot: this.state.shot,
      })
    }
  }

  handleHTMLChange(e) {
    this.setState({ ...this.state, html: e.target.value })
  }

  handleShotChange(shot) {
    this.setState({ ...this.state, shot: !shot })
  }

  handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault()
      this.props.addBlock({
        _id: this.props._id,
        ref: this.htmlRef.current,
        html: this.state.html,
        shot: this.state.shot,
      })
    }
    else if (e.key === "Backspace" && (this.state.html === "<br>" || !this.state.html)) {
      this.props.deleteBlock({ _id: this.props._id, ref: this.htmlRef.current })
      // TODO focus previous block
    }
    this.setState({ previousKey: e.key })
  }

  render() {
    return (
      <div className={styles.bulletedPoint}>
        <Bullet
          shot={this.props.shot}
          onShotChange={this.handleShotChange}
        />
        <ContentEditable
          className={styles.point}
          innerRef={this.htmlRef}
          html={this.state.html}
          onChange={this.handleHTMLChange}
        />
      </div>
    )
  }
}


export default EditableBlock
