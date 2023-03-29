// Write your code here.
import './index.css'
import {Component} from 'react'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '

const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '

class FaqItem extends Component {
  state = {isActive: false}

  renderAnswer = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isActive} = this.state

    if (isActive) {
      return (
        <div>
          <hr className="h-line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggleAnswer = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  activeImage = () => {
    const {isActive} = this.state
    const activeImage = isActive ? minusImage : plusImage
    const activeAlt = isActive ? 'minus' : 'plus'

    return (
      <div className="img-container">
        <button className="btn" type="button" onClick={this.onToggleAnswer}>
          <img src={activeImage} alt={activeAlt} className="img-icon" />
        </button>
      </div>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {questionText} = faqDetails
    return (
      <li className="question-answer">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          {this.activeImage()}
        </div>
        <div className="answer-container">{this.renderAnswer()}</div>
      </li>
    )
  }
}

export default FaqItem
