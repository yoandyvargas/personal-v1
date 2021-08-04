import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.a`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
border-radius: 8px;
margin-top: 1rem;
padding: 0.5rem 1rem;
color: white;
font-weight: 600;
min-width: 105px;
background: rgba(25,25,25,0.90);
transition: background 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
text-decoration: none;
&:hover {
  background: var(--accent-color);
  svg {
    fill: white;
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

const Button = ({children}) => {
  return (
    <StyledButton>
      {children}
    </StyledButton>
  )
}

export default Button;