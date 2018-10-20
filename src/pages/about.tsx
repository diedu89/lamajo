import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import Link from '../components/link';
import SideFade from '../components/side-fade';
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
          <div className="col-1 offset-6 align-self-end" style={{marginBottom:'10%',height:'40%', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <SideFade delay={1100}>
              <img src={sight} style={{width:'100%'}}/>
            </SideFade>
            <SideFade axis="Y" direction={-1} delay={1300}>
              <img src={rabbits} style={{width:'100%'}}/>
            </SideFade>
          </div>
          <div className="col-1 offset-2" style={{marginTop:'11%'}}>
            <SideFade axis="Y" delay={700}>
              <img src={stories} style={{width:'100%'}}/>
            </SideFade>
          </div>
          <div className="col-1 align-self-end" style={{marginBottom:'16%',height:'45%', display:'flex',flexDirection:'column', justifyContent:'space-between'}}>
            <SideFade direction={-1} delay={900}>
              <img src={piercing} style={{width:'100%'}}/>
            </SideFade>
            <SideFade direction={-1} delay={1500}>
              <img src={playlist} style={{width:'100%'}}/>
            </SideFade>
          </div>
        </div>

          <div className="col-1 align-self-end absolute" style={{bottom:0, left:'50%', marginBottom:'1%', paddingLeft:'-50%'}}>
            <Link page="menu" transition="UP">
              <UpArrow />
            </Link>
          </div>

        <div className="absolute col-5" style={{backgroundColor:'white', height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-end big-text" style={{fontSize:'4em'}}>
              <SideFade axis="Y" direction={-1}>
                  La Majo
              </SideFade>
            </div>
            <div className="w-100" />
            <div className="col-8 offset-2 align-self-center" style={{textAlign:'left'}}>
              <SideFade axis="Y" delay={300}>
                <div className="big-text" style={{fontSize:'3em'}}>Hey ...</div>
              </SideFade>
              <SideFade axis="Y" delay={600}>
                <div className="AllerRegular" style={{fontSize:'0.8em'}}>
                  Soy Majo, diseñadora e ilustradora, encontré mi 
                  pasión por la ilustración 
                  hace un tiempo, desde entonces, utilizo mi 
                  trabajo como canal de transmisión de 
                  mensajes en búsqueda de soluciones que 
                  vayan de la mano gráfica y socialmente.
                </div>
              </SideFade>
            </div>
          </div>
        </div>

        <div className="full">
          <div className="row" style={{marginTop:'10%'}}>
            <div className="col-5 offset-6">
              <img src={majo} style={{width:'100%'}}/>
            </div>
            <div className="col" />
          </div>
        </div>

      </animated.div>
    );
  }
}

export default About;