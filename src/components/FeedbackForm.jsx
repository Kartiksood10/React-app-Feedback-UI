import Card from "./shared/Card"
import { useState, useContext, useEffect } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

function FeedbackForm() {
  const[text, setText] = useState("") // text that we will input
  const[rating, setRating] = useState(10) // rating we will select
  const[btnDisabled, setBtnDisabled] = useState(true) // disabling button till condition is fulfilled
  const[message, setMessage] = useState("") // message that is rendered till condition is satisfied

  const{addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)
  
  // useEffect - renders when conditions inside are met
  // second parameter is dependency array based on which components are rendered
  // if dependency array changes useEffect takes place
  // when we press edit, we want the button-enabled,text and rating of selected feedback
  // if condition is to check if after pressing edit user has actually edited the feedback or not
  useEffect(() => {
    if(feedbackEdit.edit === true){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) =>{
    if(text===''){

        setBtnDisabled(true)
        setMessage(null)
    } // .trim() removes spaces from string and checks length
    else if(text!=='' && text.trim().length<10){

        setMessage('Text must be atleast 10 characters')
        setBtnDisabled(true)
    }
    else{
         setBtnDisabled(false)
         setMessage(null)
    }

    setText(e.target.value) // fetching value of input text using e.target.value
  }

  // when submit button is clicked in form
  const handleSubmit = (e) =>{

    e.preventDefault()
    if(text.trim().length > 10){

        const newFeedback = {

            text: text,
            rating: rating,
        }

        // calling addFeedback, updateFeedback from FeedbackContext

        if(feedbackEdit.edit === true){
          updateFeedback(feedbackEdit.item.id, newFeedback)
        }
        else{

          addFeedback(newFeedback);
        }

        setText('')
    }
  }

  const rate = (rating) =>{
    setRating(rating)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your experience with us?</h2>
        {/* Rating select component */}
        <RatingSelect select={rate} />
        {/* onChange is when we type in the form like onClick in button */}

        <div className="input-group">
            <input onChange={handleTextChange}type='text' placeholder="Write a review" value={text}></input>
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
