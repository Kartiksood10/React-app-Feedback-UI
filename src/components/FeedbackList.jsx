import FeedbackItem from "./FeedbackItem"
//import PropTypes from 'prop-types'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

function FeedbackList() {
   // can use feedback instead of props.feedback using {feedback}

    const{feedback, isLoading} = useContext(FeedbackContext)
    if(!isLoading && (!feedback || feedback.length===0)){

        return <p>No feedback yet</p>
    }

    return isLoading ? <Spinner /> : (<div>
      {feedback.map((item) => ( // iterating through each feedback item, key is used to uniquely fetch each item by id
          <FeedbackItem key={item.id} item={item} /> // item is a prop for FeedbackItem file
      ))}
    </div>)
  }

  // FeedbackList.propTypes = {

  //   feedback: PropTypes.arrayOf(

  //       PropTypes.shape({
  //           id: PropTypes.number.isRequired,
  //           text: PropTypes.string.isRequired,
  //           rating: PropTypes.number.isRequired,
  //       })
  //   )
  // }
  
  export default FeedbackList
