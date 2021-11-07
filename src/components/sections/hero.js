import React from "react";
import styled from "styled-components";
import { Button, GhIcon, LinkedinIcon, EmailIcon } from "../index";

const HeroContainer = styled.section`
  margin: 8rem 0;
  animation: fadeIn 1.5s, slideUp 1s;
  &::after {
    display: block;
    content: "";
    background: var(--main-text-color);
    opacity: 0.125;
    width: 100%;
    height: 2px;
    margin-top: 2rem;
  }
  h1 {
    font-size: 5rem;
    margin-bottom: 0.25rem;
  }
  h2 {
    font-weight: 400;
    line-height: 1.5;
    font-size: 1.25rem;
    max-width: 80%;
    margin-bottom: 0.25rem;
  }
  span {
    color: var(--accent-color);
    a {
      text-decoration: none;
      font-weight: bold;
      padding: 0.25rem;
      box-sizing: border-box;
      border-bottom: solid 3px #FFBC42;
      transition: all 0.5s;
      &:hover {
        background: #FFBC42;
        transition: all 0.5s;
        color: black;
        border-radius: 4px;
        border: none;
      }
    }
  }
  @media screen and (max-width: 642px) {
    margin: 4rem 0;
    h1 {
      font-size: 3rem;
    }
    h2 {
      max-width: 100%;
    }
  }
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: row;
  a {
    margin-right: 1rem;
  }
  a:nth-:nth-child(3) {
    margin-right: 0rem;
  }
  @media screen and (max-width: 642px) {
    flex-wrap: wrap;
    a {
      margin-right: 0.25rem;
    }
  }
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(150px);
    }
    to {
      transform: translateY(0px);
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>
        Hello, I'm <span>Yoandy</span>
      </h1>
      <h2>
      I'm a software engineer specializing in building pixel-perfect, robust, and accessible user interfaces. Currently, I'm developing excellent product experiences at <span><a href="https://www.sightplan.com" target="_blank" rel="noopener noreferrer">SightPlan</a></span>.
      </h2>
      <ButtonList>
        <Button href="https://www.github.com/yoandyvargas">
          <GhIcon />
          GitHub
        </Button>
        <Button href="https://www.linkedin.com/in/yoandyvargas/">
          <LinkedinIcon />
          LinkedIn
        </Button>
        <Button href="mailto:yoandy.vargas@icloud.com">
          <EmailIcon />
          Email
        </Button>
      </ButtonList>
    </HeroContainer>
  );
};

export default Hero;
