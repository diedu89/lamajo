import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import frame from '../css/images/astronejo/frame.jpg';
import trazo1 from '../css/images/astronejo/trazo1.png';
import trazo2 from '../css/images/astronejo/trazo2.png';
import trazo3 from '../css/images/astronejo/trazo3.png';
import trazo4 from '../css/images/astronejo/trazo4.png';
import btnMenu from '../css/images/btn-menu-white.svg';
import process from '../css/images/process-white.png';

import GrowFade from '../components/grow-fade';
import LeftArrow from '../components/left-arrow';
import Link from '../components/link'
import SideFade from '../components/side-fade';
import SocialNetworkLinks from '../components/social-networks-links';
import Tools from '../components/tools';

interface RabbitProps extends PageProps{
  style: any
};

class Rabbit2 extends Page<RabbitProps> {
  public render() {
    let delay=0;
    const step=200;
    return (
      <animated.div 
        className="center-content-spaced full absolute rabbit2" style={this.props.style}>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="rabbit1" transition="MOVE_LEFT">
                <LeftArrow/>
              </Link>
            </div>
            <div className="col-6 align-self-center" style={{padding:'0 3%'}}>
              <GrowFade axis="">
                <img src={frame} style={{width:'100%', boxShadow:'1em 1em 2.5em 0.1em'}}/>
              </GrowFade>
            </div>
            <div className="col-4 padding0" style={{marginBottom:'0%', marginTop:'5%'}}>
              <div className="row full">
                <div className="col align-self-start">
                  <div className="row">
                    <div className="col-3 offset-9 hvr-pulse-grow" style={{padding: '3%'}}>
                      <Link page="menu" transition="FADE">
                        <img src={btnMenu} style={{width:'100%'}}/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="col padding0">
                  <div className="row" style={{margin:0}}>
                    <div className="col padding0" style={{margin:'2%'}}>
                      <SideFade delay={delay+=step}>
                        <img src={trazo1} className="trazo" />
                      </SideFade>
                    </div>
                    <div className="col padding0" style={{margin:'2%'}}>
                      <SideFade delay={delay+=step}>
                        <img src={trazo2} className="trazo" />
                      </SideFade>
                    </div>
                  </div>
                  <div className="row" style={{margin:0}}>
                    <div className="col padding0" style={{margin:'2%'}}>
                      <SideFade delay={delay+=step}>
                        <img src={trazo3} className="trazo" />
                      </SideFade>
                    </div>
                    <div className="col padding0" style={{margin:'2%'}}>
                      <SideFade delay={delay+=step}>
                        <img src={trazo4} className="trazo" />
                      </SideFade>
                    </div>
                  </div>
                  <div className="row" style={{marginTop:'20%'}}>
                    <div className="col-9 offset-3 padding0" style={{textAlign:'right'}}>
                      <SideFade delay={delay+=step}>
                        <img src={process} style={{width:'66%'}} />
                      </SideFade>
                      <SideFade delay={delay+=step}>
                        <div className="AllerRegular text-right" style={{fontSize:'0.74em',marginTop:'6%', color:'white'}}>
                          Cuenta con capas de scketch y aplicación de color 
                          capa por capa, en las cuales, se experimentó a 
                          través de luces, sombras y texturas.
                        </div>
                        <Tools className="col-8 offset-4 padding0 row" 
                          style={{marginTop:'2%'}} 
                          tools={['Paint Tool Sai','Photoshop']}/>
                        <SocialNetworkLinks className="col-3 offset-9 padding0 row" instagram="BbA_rE5H_oX" behance="64420673/Astronejo-animation" />
                      </SideFade>
                    </div>
                  </div>
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

export default Rabbit2;