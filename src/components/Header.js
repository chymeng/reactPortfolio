import React from 'react'
import Svg from '../components/Svg'
import { contact } from '../constants/Text'

const Header = () => (
  <div className="head">
    <div className="line" />
    <h1>
      I’m <span>Chy Meng</span>, a junior developer currently living and working
      in Melbourne.
    </h1>
    <div className="line" />

    <div className="contact-me">
      {contact.map(x => {
        return <Svg icon={x.icon} a={x.a} />
      })}
    </div>
  </div>
)

export default Header
