import React, { useState } from 'react'
import styled from 'styled-components'

const WorkHistory = styled.div`
  max-width: 760px;
  padding: 0 2rem;
  margin: 0 auto;
  h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`

const WorkInfo = styled.div`
  margin-bottom: 2rem;
  span {
    color: var(--accent-color);
  }
  h3 {
    font-size: 1.25rem;

  }
  h4 {
    margin-bottom: 1rem;
    font-weight: normal;
  }
  ul {
    list-style: none;
    line-height: 1.5;
    padding: 0;
    li::before {
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      border: solid 1px var(--accent-color);
      border-radius: 50%;
      margin-right: 0.5rem;
    }
  }
`

const Work = () => {

  const [display, setDisplay] = useState(false);

  return (
    <WorkHistory>
      <h2 onClick={() => {
        if(display === true ){
          setDisplay(false) 
        } else {
        setDisplay(true)
        }
        }}>Where I've Worked</h2>
      {display === true && 
        <WorkInfo>
          <h3>Web Designer & Developer Career Experience<span> @ Apple</span></h3>
          <h4>Jan - Jul 2021</h4>
          <ul>
            <li>Developed modern HTML email templates for an internal email client using Kit, Stylus, Gulp, and Node.</li>
            <li>Researched and synthesized UX data to identify personas, discover use cases, and capture feedback.</li>
            <li>Designed, wireframed, and prototyped the UI and other visual elements with Adobe Creative Suite.</li>
            <li>Collaborated with multi-disciplinary teams to support development for company and organization initiatives.</li>
          </ul>
        </WorkInfo>
      }
      {display === true && 
        <WorkInfo>
          <h3>Front-End Developer Internship<span> @ Callahan Genealogy (UCF) </span></h3>
          <h4>Feb 2020 - Jan 2021</h4>
          <ul>
            <li>Developed an interactive, engaging, and self-sufficient website using HTML, CSS, JavaScript, and WordPress.</li>
            <li>Implemented a custom WordPress theme that enabled flexibility and reduced support requirements.</li>
            <li>Researched UX data to determine the best information architecture for 200+ unique and historic photographic stories.</li>
          </ul>
        </WorkInfo>
      }
    </WorkHistory>
  )
}

export default Work;