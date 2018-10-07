import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import Link from '../components/link';
import UpArrow from '../components/up-arrow';

import majo from '../css/images/about/majo.png';
import piercing from '../css/images/about/piercing.png';
import playlist from '../css/images/about/playlist.png';
import rabbits from '../css/images/about/rabbits.png';
import sight from '../css/images/about/sight.png';
import stories from '../css/images/about/stories.png';


interface AboutProps extends PageProps{
  none?: any,
  style: any
};

class About extends Page<AboutProps> {
  public render() {
    return (
      <animated.div className="full absolute contact" style={this.props.style}>
        <div className="absolute full row" >
          <div className="col-1 offset-6 align-self-end padding0" style={{marginBottom:'14%',height:'40%', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <img src={sight} style={{width:'100%'}}/>
            <img src={rabbits} style={{width:'100%'}}/>
          </div>
          <div className="col-1 offset-2 padding0" style={{marginTop:'11%'}}>
            <img src={stories} style={{width:'100%'}}/>
          </div>
          <div className="col-1 align-self-end padding0" style={{marginBottom:'16%',height:'45%', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <img src={piercing} style={{width:'100%'}}/>
            <img src={playlist} style={{width:'100%'}}/>
          </div>
        </div>

        <div className="absolute col-5" style={{backgroundColor:'white', height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-end big-text" style={{fontSize:'4em'}}>
              La Majo
            </div>
            <div className="w-100" />
            <div className="col-8 offset-2 align-self-center" style={{textAlign:'left'}}>
              <div className="big-text" style={{fontSize:'3em'}}>Hey ...</div>
              <div className="AllerRegular" style={{fontSize:'0.8em'}}>
                Soy Majo, diseñadora e ilustradora, encontré mi 
                pasión por la ilustración 
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