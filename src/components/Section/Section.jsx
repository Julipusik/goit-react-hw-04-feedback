import React from "react";
import { Container, SectionTitle } from "./Section.styled";

export class Section extends React.Component {
    render() {
        return (
            <Container>
                <SectionTitle>{this.props.title}</SectionTitle>
                {this.props.children}
            </Container>
        )
    }
}