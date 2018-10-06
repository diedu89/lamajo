import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import Link from '../components/link';
import UpArrow from '../components/up-arrow';

import majo from '../css/images/contact/majo.png'

interface AboutProps extends PageProps{
  none?: any,
  style: any
};

class About extends Page<AboutProps> {
  public render() {
    return (
      <animated.div className="full absolute contact" style={this.props.style}>
        <div className="absolute col-5" style={{backgroundColor:'white', height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-end big-text" style={{fontSize:'4em'}}>
              La Majo
            </div>
            <div className="w-100" />
            <div className="col-8 offset-2 align-self-center" style={{textAlign:'left'}}>
              <div className="big-text" style={{fontSize:'3em'}}>Hey ...</div>
              <div className="AllerRegular" style={{fontSize:'0.8em'}}>
                Soy Majo, diseñadora e ilustradora de 24 
                años, encontré mi pasión por la ilustración 
                hace un tiempo, desde entonces, utilizo mi 
                trabajo como canal de transmisión de 
                mensajes en búsqueda de soluciones que 
                vayan de la mano gráfica y socialmente.
              </div>
            </div>
          </div>
        </div>
        <div className="container full">
          <div className="row" style={{marginTop:'10%'}}>
            <div className="col-5 offset-6">
              <img src={majo} style={{width:'100%'}}/>
            </div>
            <div className="col" />
          </div>
          <div className="row justify-content-center">
            <div className="col-1">
              <Link page="menu" transition="UP">
                <UpArrow />
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default About;