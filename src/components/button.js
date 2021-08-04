import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
  display: flex;
  place-items: center;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  min-width: 105px;
  text-decoration: none;
  background: var(--secondary-bg-color);
  color: var(--main-text-color);
  border: solid 1px var(--main-bg-color);
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    &:hover {
      border: solid 1px var(--accent-color);
      background: none;
      svg {
        fill: var(--main-text-color);
      }
    }
  svg {
    width: 16px;
    height: 16px;
    margin-right: 0.25rem;
    fill: var(--accent-color);
    transition: fill 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
`

const Button = ({children, href}) => {
  return (
    <StyledButton href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledButton>
  )
}

export default Button;