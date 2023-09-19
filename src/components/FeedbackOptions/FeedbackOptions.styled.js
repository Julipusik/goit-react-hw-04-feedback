import { styled } from "styled-components";

export const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
`

export const OptionButton = styled.button`
    font-size: 18px;
    color: #000;
    padding: 8px 12px;
    background-color: white;
    border-radius: 40px;
    border: 2px solid #4f2ee8;

    &:hover {
        color: white;
        background-color: #4f2ee8;
        box-shadow: 0px 0px 0px 4px rgba(79, 46, 232, 0.3);

    }
`