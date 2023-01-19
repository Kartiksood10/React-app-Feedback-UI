import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; //package to give unique id to each rating
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is feedback item 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is feedback item 2",
      rating: 9,
    },
    {
      id: 3,
      text: "This is feedback item 3",
      rating: 7,
    },
  ]);

  // selecting the text in the feedback we want to edit using useState
  const [feedbackEdit, setFeedbackEdit] = useState({
    // initially selected item is empty
    item: {},
    edit: false,
  });

  const addFeedback = (newFeedback) => {
    // uuid gives a unique id to each rating
    newFeedback.id = uuidv4();
    // ... adds newFeedback element to existing feedback array
    // newFeedback is to be added in the start of the array so it is placed before the ...
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    // changing current state of feedback using setFeedback (deletion)
    if (window.confirm("Are you sure you want to delete?")) {
      //filter array to all cards except selected card (card clicked to delete)
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // function to access item to edit
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  // updating feedback
  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };

  return (
    // all props and functions stored in .provider value to be used globally in other files
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
