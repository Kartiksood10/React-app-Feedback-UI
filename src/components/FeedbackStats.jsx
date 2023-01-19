//import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {

  const{feedback} = useContext(FeedbackContext)
// Calculate avg rating
//reduce() reduces an array to a single value by executing func on each val of array from left to right
  let average = feedback.reduce((acc,cur) => {
    return acc + cur.rating
  }, 0) / feedback.length  

//   let sum = feedback[0]
//   for(let i=1;i<feedback.length;i++){

//     sum = sum + feedback[i]
//   }

//   let average = sum/feedback.length

  //one decimal place except for 9.0, 8.0 etc
  average = average.toFixed(1).replace(/[.,]0$/, '')
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

// FeedbackStats.propTypes = {

//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats
