import Card from "./shared/Card"
import PropTypes from 'prop-types'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackItem({ item }) {
  const{deleteFeedback, editFeedback} = useContext(FeedbackContext)

  return (
    // Styles are called using classNames mentioned in index.css
    // instead of calling div className=card everytime we have created a component Card
    // button is the x mark on card to delete feedback
    // second button is to edit a feedback
    <Card>
      <div className="num-display">{item.rating}</div> 
      <button onClick={() => deleteFeedback(item.id)}className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItem.propTypes = {

    item: PropTypes.object.isRequired
}

export default FeedbackItem
