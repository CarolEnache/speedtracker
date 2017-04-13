import React from 'react'
import { render } from 'react-dom' // eslint-disable-line no-unused-vars

import Logo from './Logo'

class Footer extends React.Component {
  render () {
    return (
      <footer className='c-Footer'>
        <div className='c-Footer__inner'>
          <a href='https://speedtracker.org' className='c-Footer__logo'>
            <Logo width={40} />
          </a>

          <p>Report generated by <a href='https://speedtracker.org'>SpeedTracker</a>. Data captured using <a href='https://www.webpagetest.org/'>WebPageTest</a>.</p>
          <p>SpeedTracker is an open-source project built by <a href='https://eduardoboucas.com'>Eduardo Bouças</a>. Logo design by <a href='https://thenounproject.com/elves.sousa/'>Elves Sousa</a>.</p>

          <ul className='c-Footer__links'>
            <li className='c-Footer__link'><a href='https://speedtracker.org'>Get your own</a></li>
            <li className='c-Footer__link'><a href='https://github.com/speedtracker'>Report an issue</a></li>
            <li className='c-Footer__link'><a href='https://twitter.com/speed_tracker'>Follow platform updates</a></li>
          </ul>
        </div>
      </footer>
    )
  }
}

export default Footer
