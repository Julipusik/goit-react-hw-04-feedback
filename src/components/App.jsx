import React, { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

// export class App extends React.Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
  
//   onFeedbackClick = values => {
//     this.setState(prevState => ({ [values]: prevState[values] + 1, }));
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good } = this.state;
//     const totalSum = this.countTotalFeedback();

//     if (totalSum === 0) {
//       return 0;
//     }
//     return Math.round((good / totalSum) * 100);
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const totalFeedback = this.countTotalFeedback();
    
//   return(
//     <div>
//       <Section title="Please leave feedback">
//         <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onFeedbackClick} />
//       </Section>
//       <Section title="Statistics">
//         {totalFeedback > 0 ? 
//         <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={this.countPositiveFeedbackPercentage()} />
//           :
//         <Notification message="There is no feedback"/>
//           }
//       </Section>
//     </div>
//   );
// }
// };

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onFeedbackClick = values => {
    switch (values) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  
  const totalFeedback = good + neutral + bad;

  const countPositiveFeedbackPercentage = () => {
    if (totalFeedback === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback) * 100);
  };
    
  return (
    <div>
      <Section title="Please leave feedback">
         <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={onFeedbackClick} />
       </Section>
       <Section title="Statistics">
         {totalFeedback > 0 ? 
         <Statistics good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={countPositiveFeedbackPercentage()} />
           :
         <Notification message="There is no feedback"/>
           }
       </Section>
     </div>
  )
}