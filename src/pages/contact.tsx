import * as React from 'react';
import Page, { PageProps } from './page';

import { animated, Trail } from 'react-spring';

import DownArrow from '../components/down-arrow';
import Link from '../components/link';

import majo from '../css/images/contact/majo.png'
import title from '../css/images/contact/title.png'

import { faBehance, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


interface ContactProps extends PageProps{
  none?: any,
  style: any
};

const items = [
  {
    href: 'https://www.instagram.com/la_majo_ilustradora/',
    icon: (<FontAwesomeIcon icon={faInstagram} />),
    text: 'la_majo_ilustradora',
  },
  {
    href: 'mailto:majoilustra@gmail.com',
    icon: (<FontAwesomeIcon icon={faEnvelope} />),
    text: 'majoilustra@gmail.com',
  },
  {
    href: 'https://behance.net/mjmanzano',
    icon: (<FontAwesomeIcon icon={faBehance} />),
    text: 'behance.net/mjmanzano',
  },
  {
    href: 'https://linkedin.com/in/mjmanzano',
    icon: (<FontAwesomeIcon icon={faLinkedin} />),
    text: 'linkedin.com/in/mjmanzano',
  }
]

class Contact extends Page<ContactProps> {
  public render() {
    return (
      <animated.div className="center-content center-vertical full absolute contact" style={this.props.style}>
        <div className="container full">
          <div className="row justify-content-center">
            <div className="col-1">
              <Link page="menu" transition="DOWN">
                <DownArrow />
              </Link>
            </div>
          </div>
          <div className="row" style={{marginTop:'3%'}}>
            <div className="col-4 offset-1 align-self-end">
              <img src={title} style={{width:'100%', marginBottom:'15%'}}/>
              <Trail
                native={true}
                from={{ opacity: 0, x: -100 }}
                to={{ opacity: 1, x: 0 }}
                keys={items.map(item=>item.text)}>
                {items.map(item => ({ x, opacity}:{x:any, opacity:number}) => (
                  <animated.div
                    className="AllerBold"
                    style={{
                      color:'white',
                      opacity,
                      transform: x.interpolate((n:number) => `translate3d(${n}%,0,0)`)
                    }}
                  >
                    <a className="contact-list-item row" href={item.href} target="_blank">
                      <div className="icon col-3">{item.icon}</div>
                      <div className="text col-8">{item.text}</div>
                    </a>
                  </animated.div>
                ))}
              </Trail>
            </div>
            <div className="col-5 offset-1">
              <img src={majo} style={{width:'100%'}}/>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Contact;