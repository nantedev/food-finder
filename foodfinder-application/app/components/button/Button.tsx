"use client"; 

import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: "blue" | "outline" | "default";
  onClick?: () => void;
}


export const Button: React.FC<ButtonProps> = ({ children, variant = "default", disabled, onClick }) => {
    return (
      <ButtonStyled variant={variant} disabled={disabled} onClick={!disabled ? onClick : undefined}>
        {children}
      </ButtonStyled>
    );
  };


const ButtonStyled = styled.button<ButtonProps>`
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  font-weight: 500;
  height: 35px;
  letter-spacing: 0;
  margin: 0;
  overflow: hidden;
  place-content: flex-start;
  position: relative;
  white-space: nowrap;
  padding: 0 1rem;
  transition: border-color 0.25s ease-in, background-color 0.25s ease-in, color 0.25s ease-in;
  will-change: border-color, background-color, color;

  // ✅ Styles pour chaque variant
  ${(props) =>
    props.variant === "default" &&
    css`
      background-color: transparent;
      border: 1px solid transparent;
      color: #1d1f21;

      &:hover,
      &:active {
        background-color: transparent;
        border: 1px solid #dbd8e3;
        color: #1d1f21;
      }
    `}

  ${(props) =>
    props.variant === "blue" &&
    css`
      background-color: rgba(0, 118, 255, 0.9);
      border: 1px solid rgba(0, 118, 255, 0.9);
      color: #fff;
      text-decoration: none;

      &:hover,
      &:active {
        background-color: transparent;
        border: 1px solid #1d1f21;
        color: #1d1f21;
      }
    `}

  ${(props) =>
    props.variant === "outline" &&
    css`
      background-color: transparent;
      border: 1px solid #dbd8e3;
      color: #1d1f21;

      &:hover,
      &:active {
        background-color: transparent;
        border: 1px solid rgba(0, 118, 255, 0.9);
        color: rgba(0, 118, 255, 0.9);
      }
    `}

  // ✅ Styles pour l'état désactivé
  ${(props) =>
    props.disabled &&
    css`
      background-color: transparent;
      border: 1px solid #dbd8e3;
      color: #dbd8e3;
      cursor: not-allowed;
      pointer-events: none;
    `}
`;




