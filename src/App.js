//import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
//import FeedbackData from "./data/FeedbackData";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
// Routers are used to redirect to different pages in react, we wish to redirect to a page without refreshing the main page
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  // //useState has [currentState, function to updateState]
  // const [feedback, setFeedback] = useState(FeedbackData); // FeedbackData has file with feedback values
  return (
    // empty <> are used as each jsx element must have a parent element
    // all functions, props inside FeedbackProvider can be accessed globally by any component
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route // when path is '/' render the feedback UI
              exact
              path="/"
              element={
                // To call jsx element there must be a parent element
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            {/* When path is /about render AboutPage */}
            <Route path="/about" element={<AboutPage />} />
          </Routes>

          {/* Question mark icon to go to AboutPage */}
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
