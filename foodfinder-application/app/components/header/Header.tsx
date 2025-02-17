"use client"
import { JSX } from "react";
import styled from "styled-components";
import { Logo } from "./logo/Logo";
import AuthElement from "./auth-element/AuthElement";


export const Header = (): JSX.Element => {
    return (
        <HeaderStyled>
            <div className="layout-grid">
                <Logo />
                <AuthElement />
            </div>
        </HeaderStyled>
    );
};


const HeaderStyled = styled.header`
    background-color: white;
    color: #fff;
    padding: 1rem 0;
    width: 100%;
    position: fixed;

    .layout-grid {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 750px;
        width: 100%;
    }
`
