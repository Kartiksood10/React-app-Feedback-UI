import { createContext, useState, useEffect } from "react";
//import { v4 as uuidv4 } from "uuid"; //package to give unique id to each rating
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); //to bring in a spinner gif while loading
  const [feedback, setFeedback] = useState([]);

  // selecting the text in the feedback we want to edit using useState
  const [feedbackEdit, setFeedbackEdit] = useState({
    // initially selected item is empty
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  //Fetch feedback from db.json server file
  // async await renders data only after it has loaded
  // _sort based on id in desc order
  const fetchFeedback = async () => {
    const response = await fetch(
      `http://localhost:5000/feedback?_sort=id&_order=desc`
    );

    // response.json returns the data we are accessing
    const data = await response.json();

    setFeedback(data);
    setIsLoading(false);
  };

  //METHODS:
  // POST - ADD DATA TO JSON SERVER
  //DELETE - DELETE DATA FROM JSON SERVER
  // PUT - UPDATE DATA TO JSON SERVER

  //JSON - Javascript object notation - used for transfer of data from server to webpage in js object syntax

  // method POST is to add a new feedback into backend database
  // .stringify converts javascript value to JSON string
  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    // ... adds newFeedback element to existing feedback array
    // newFeedback is to be added in the start of the array so it is placed before the ...
    //setFeedback([newFeedback, ...feedback]);
    setFeedback([data, ...feedback]);
  };

  const deleteFeedback = async (id) => {
    // changing current state of feedback using setFeedback (deletion)
    if (window.confirm("Are you sure you want to delete?")) {
      await fetch(`http://localhost:5000/feedback/${id}`, { method: "DELETE" });
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

  // updating feedback from backend
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });

    const data = await response.json();

    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  };

  return (
    //FeedbackContex.Provider from FeedbackContext
    // all props and functions stored in .provider value to be used globally in other files
    // first three values are props, next 4 are functions
    // {children - all components inside FeedbackProvider inside App.js}
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
