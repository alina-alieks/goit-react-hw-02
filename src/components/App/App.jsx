import Description from "../Description/Description"
import Feedback from "../Feedback/Feedback"
import Options from "../Options/Options"
import Notification from "../Notification/Notification"
import { useState } from "react"
import { useEffect } from "react"

import css from "./App.module.css"



export default function App() {
  
  const [values, setValues] = useState(() => {
    const saveValues = JSON.parse(localStorage.getItem("values"));
    if (saveValues !== null) {
      return saveValues
    }
    return ({
      good: 0,
	    neutral: 0,
      bad: 0
    })
    
  })

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values))
  }, [values])

  const updateFeedback = (feedbackType) => {
  setValues({
        ...values,
        [feedbackType]:  values[feedbackType] + 1
    })
  }
  
  const totalFeedback = values.good + values.neutral + values.bad;
  const percentagePositiveReviews = Math.round((values.good / totalFeedback) * 100);
  const resetValues = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
    })
  };
  
  return (
    <div className={css.container}>
      <Description />
      <Options  updateFeedback = {updateFeedback} totalFeedback = {totalFeedback} reset = {resetValues} />
      {totalFeedback !== 0 ? <Feedback {...values} totalFeedback = {totalFeedback} positivReviews={percentagePositiveReviews } /> : <Notification/>}
    </div>
  )
}

