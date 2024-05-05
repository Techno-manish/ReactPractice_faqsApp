// Write your code here.
import {Component} from 'react'
import './index.css'
import FaqItem from '../FaqItem'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="bgContainer">
        <div className="bodyContainer">
          <h1 className="mainHeading">FAQs</h1>
          <ul className="listContainer">
            {faqsList.map(each => (
              <FaqItem key={each.id} data={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Faqs
