"use client"
import styled from "styled-components"

export const StyledLayout = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 800px;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 600px) {
    flex-direction: row;
    padding: 0 2rem;
  }
`
