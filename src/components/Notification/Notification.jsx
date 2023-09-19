import React from "react";
import { Notifier } from "./Notification.styled";

export class Notification extends React.Component {
    render() {
        return (
            <Notifier>{this.props.message}</Notifier>
        )
    }
}