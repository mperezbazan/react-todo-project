import React from 'react'
import { Link, Route } from 'react-router-dom'
import SinglePage from './SinglePage'

const About = (props) => {
  return (
    <div className='container'>
      <div className='inner'>
        <div className="about__content">
          <ul className="about__list">
            <li>
              <Link to={`/about/about-app`}>About App</Link>
            </li>
            <li>
              <Link to={`/about/about-author`}>About Author</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About