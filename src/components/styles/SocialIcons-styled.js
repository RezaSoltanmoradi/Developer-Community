import styled from "styled-components";

export const StyledSosialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;
    }
    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
        transition: 0.5s all;
        &:hover {
            background: #334499;
            color: red;
            transform: translatey(-9px);
        }
    }
`;
