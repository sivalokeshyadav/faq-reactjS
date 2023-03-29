// Write your code here.
import './index.css'

import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="app-container">
      <div className="faq-main-container">
        <h1 className="heading">FAQs</h1>
        <ul className="question-answer-container">
          {faqsList.map(eachFaq => (
            <FaqItem key={eachFaq.id} faqDetails={eachFaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Faqs
