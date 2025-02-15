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
    background: white;
    border-bottom: 1px solid #eaeaea;
    padding: 1rem 0;
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1;

@media (min-width: 600px) {
    .layout-grid {
        flex-direction: row;
        padding: 0 2rem;
    }
}
`
