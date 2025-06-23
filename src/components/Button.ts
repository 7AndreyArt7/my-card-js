import styled, {css} from "styled-components";

type ButtonPropsType = {
    btnStyle?: "primary" | "outlined";
}

const Button = styled.button<ButtonPropsType>`
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    border-radius: 5px;
    cursor: pointer;
    
    ${props =>props.btnStyle === "primary" && css<ButtonPropsType>`
        width: 86px;
        height: 30px;
        background: #4e71fe;
        color: #fff;
    `}
    
    ${props =>props.btnStyle === "outlined" && css<ButtonPropsType>`
        border: 2px solid #4e71fe;
        width: 86px;
        height: 30px;
        font-weight: 700;
        font-size: 10px;
        line-height: 2;
        color: #4e71fe;
    `}
`

export default Button