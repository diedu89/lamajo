import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import frame from '../css/images/onu/frame.jpg';
import trazo1 from '../css/images/onu/trazo1.png';
import trazo2 from '../css/images/onu/trazo2.png';
import title from '../css/images/process-white.png';

import GrowFade from '../components/grow-fade';
import LeftArrow from '../components/left-arrow';
import Link from '../components/link';
import SideFade from '../components/side-fade';
import SocialNetworkLinks from '../components/social-networks-links';
import Tools from '../components/tools';

interface Onu2Props extends PageProps{
  style: any
};

class Onu2 extends Page<Onu2Props> {
  public render() {
    let delay=0;
    const step=300;
    return (
      <animated.div 
        className="center-content-spaced full blue absolute onu2" style={this.props.style}>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="onu1" transition="MOVE_LEFT">
                <LeftArrow/>
              </Link>
            </div>
            <div className="col-6" style={{padding:'10% 0 0 3%'}}>
              <img src={frame} style={{width:"100%", boxShadow:'1em 1em 2.5em 0.1em'}}/>
            </div>
            <div className="col-3 offset-1 padding0" style={{marginBottom:'3%', marginTop:'5%'}}>
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
                <div className="col" style={{padding:'1%', marginTop:'10%'}}>
                  <GrowFade delay={delay+=step}>
                    <img src={trazo1} className="trazo" style={{width:'100%'}}/>
                  </GrowFade>
                </div>
                <div className="w-100" />
                <div className="col" style={{padding:'1%'}}>
                  <GrowFade delay={delay+=step}>
                    <img src={trazo2} className="trazo" style={{width:'100%'}}/>
                  </GrowFade>
                </div>
                <div className="w-100" />
                <div className="col align-self-end padding0" style={{marginTop:'5%'}}>
                  <div className="col-8 offset-4 padding0" style={{padding:0}}>
                    <SideFade delay={delay+=step}>
                      <img src={title} style={{width:'100%'}} />
                    </SideFade>
                  </div>
                  <SideFade delay={delay+=step}>
                    <div className="AllerRegular text-right" style={{fontSize:'0.73em', color:'white',marginTop:'6%'}}>
                      La inclusividad fue el tema principal para mi <br /> 
                      pieza, complementada con color naranja, el <br />
                      cual era requisito de la campaña. 
                    </div>

                    <Tools className="col-8 offset-4 padding0 row" 
                          style={{marginTop:'2%'}} 
                          tools={['Paint Tool Sai','Photoshop']}/>
                    <SocialNetworkLinks className="col-3 offset-9 padding0 row" instagram="BclbnvQH60S" />
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

export default Onu2;