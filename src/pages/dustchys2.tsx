import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import trazo1 from '../css/images/dustchys/trazo-1.png';
import trazo2 from '../css/images/dustchys/trazo-2.png';
import title from '../css/images/process-white.png';

import GrowFade from '../components/grow-fade';
import LeftArrow from '../components/left-arrow';
import Link from '../components/link'
import SideFade from '../components/side-fade';
import SocialNetworkLinks from '../components/social-networks-links';
import Tools from '../components/tools';

interface DustchysProps extends PageProps{
  style: any
};

class Dustchys extends Page<DustchysProps> {
  public render() {
    let delay=0;
    const step=300;
    return (
      <animated.div 
        className="center-content-spaced full tomato absolute dustchys2" style={this.props.style}>
               <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="dustchys1" transition="MOVE_LEFT">
                <LeftArrow />
              </Link>
            </div>
            <div className="col-3 offset-7" style={{marginBottom:'5%', marginTop:'5%', padding:0}}>
              <div className="row full">
                <div className="col align-self-start">
                  <div className="row">
                    <div className="col-4 offset-8 hvr-pulse-grow" style={{padding: '3%'}}>
                      <Link page="menu" transition="FADE">
                        <img src={btnMenu} style={{width:'100%'}}/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="col" style={{padding:'1px'}}>
                  <GrowFade delay={delay+=step}>
                    <img src={trazo1} className="trazo" style={{width:'100%'}} />
                  </GrowFade>
                </div>
                <div className="w-100" />
                <div className="col" style={{padding:'1px'}}>
                  <GrowFade delay={delay+=step}>
                    <img src={trazo2} className="trazo" style={{width:'100%'}} />
                  </GrowFade>
                </div>
                <div className="w-100" />
                <div className="col align-self-end" style={{padding:0}}>
                  <div className="row">
                    <div className="col-8 offset-4">
                      <SideFade delay={delay+=step}>
                        <img src={title} style={{width:'100%'}} />
                      </SideFade>
                    </div>
                  </div>
                  <SideFade delay={delay+=step}>
                    <div className="AllerRegular text-right" style={{fontSize:'0.74em', color:'white',marginTop:'6%'}}>
                      Bocetaje de personaje, estilización y <br /> 
                      humanización, pruebas de color y de <br />
                      composición tipografía.
                    </div>
                    <Tools className="col-4 offset-8 padding0 row" 
                          style={{marginTop:'2%'}} 
                          tools={['Illustrator']}/>
                    <SocialNetworkLinks className="col-3 offset-9 padding0 row"/>
                  </SideFade>
                </div>
              </div>
            </div>
            <div className="col" />
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Dustchys;