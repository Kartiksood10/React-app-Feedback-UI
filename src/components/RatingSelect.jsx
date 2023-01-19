import { useState, useContext, useEffect } from "react"
import FeedbackContext from "../context/FeedbackContext"

function RatingSelect({ select }) {
    const [selected, setSelected] = useState(10)
    
    const{feedbackEdit} = useContext(FeedbackContext)

    // same implementation of useEffect as FeedbackForm
    useEffect(() => {
      setSelected(feedbackEdit.item.rating)
    }, [feedbackEdit])

    const handleChange = (num) => () => {
      //change string to number with +
      setSelected(num)
      select(num)
    }
   
    // 1 to 10 radio buttons inside the form
    return (
      <ul className='rating'>
        {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
          <li key={num}>
            <input
              type='radio'
              id={`num${num}`}
              name='rating'
              onClick={handleChange(num)}
              checked={selected === num}
            />
            <label htmlFor={`num${num}`}>{`${num}`}</label>
          </li>
        ))}
      </ul>
    )
  }
  
  export default RatingSelect
