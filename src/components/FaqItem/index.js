// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {isHidden: true}

  setHidden = () =>
    this.setState(prevState => ({isHidden: !prevState.isHidden}))

  render() {
    const {data} = this.props
    const {questionText, answerText} = data
    const {isHidden} = this.state

    const iconUrl = isHidden
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

    const iconAltText = isHidden ? 'plus' : 'minus'

    return (
      <li className="listItem">
        <div className="questionContainer">
          <h1 className="questionText">{questionText}</h1>

          <img
            className="hideUnhide"
            src={iconUrl}
            alt={iconAltText}
            onClick={this.setHidden}
          />
        </div>
        <hr />
        <p className="answerText">{!isHidden && answerText}</p>
      </li>
    )
  }
}
export default FaqItem
