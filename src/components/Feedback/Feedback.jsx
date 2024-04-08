import css from "./Feedback.module.css"


export default function Feedback({good, neutral, bad, totalFeedback, positivReviews }) {
    


    return (
        <ul className={css.feedbacks}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {positivReviews}</li>
        </ul>
    )
}