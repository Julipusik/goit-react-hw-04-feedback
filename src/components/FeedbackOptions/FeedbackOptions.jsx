import React from "react";
import { Options, OptionButton } from "./FeedbackOptions.styled";

export function FeedbackOptions({options, onLeaveFeedback}) {
        return (
            <Options>
                {options.map(option => (<OptionButton key={option} onClick={() => onLeaveFeedback(option)} type="button">{option}</OptionButton>))}
            </Options>
        );
}