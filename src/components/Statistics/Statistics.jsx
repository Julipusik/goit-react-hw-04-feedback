import React from "react";
import { Stats } from "./Statistics.styled";

export class Statistics extends React.Component {
    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;
        return (
            <Stats>
                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <p>Total: {total}</p>
                <p>Positive feedback: {positivePercentage}%</p>
           </Stats> 
        )
    }

}