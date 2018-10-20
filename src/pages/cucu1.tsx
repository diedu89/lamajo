import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import RightArrow from '../components/right-arrow';

import btnMenu from '../css/images/btn-menu-white.svg';
import device from '../css/images/cucu/device.png';
import featherBottomLeft from '../css/images/cucu/feather-bottom-left.png'; 
import featherBottom from '../css/images/cucu/feather-bottom.png'; 
import featherTopLeft from '../css/images/cucu/feather-top-left.png'; 
import title from '../css/images/cucu/title.png';

import ColorBar from '../components/color-bar';
// import GrowFade from '../components/grow-fade';
import Link from '../components/link'
import SideFade from '../components/side-fade';

interface CucuProps extends PageProps{
  style: any
};

class Cucu extends Page<CucuProps> {
  public render() {
    let delay=0;
    const step=200;
    return (
      <animated.div 
        className="center-content-spaced full green absolute" style={this.props.style}>
        <ColorBar />
        <div className="absolute row full">
          <div className="col-2" style={{padding:0}}>
            <SideFade axis="Y" direction={-1} >
              <img src={featherTopLeft} style={{width:'100%'}}/>
            </SideFade>
            <SideFade direction={-1} delay={delay+=step} style={{position:'absolute', bottom:0, left:0}}>
              <img src={featherBottomLeft} style={{width:'100%'}}/>
            </SideFade>
          </div>
          <div className="col-3 offset-3" style={{display:'flex'}}>
            <SideFade axis="Y" delay={delay+=step} style={{alignSelf:'flex-end'}}>
              <img src={featherBottom} style={{width:'100%'}}/>
            </SideFade>
          </div>
        </div>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-7 offset-1" style={{marginTop: '6%', padding:'4%'}}>
              <SideFade direction={-1} delay={delay+=step}>
                <img src={device} style={{width:"100%"}}/>
              </SideFade>
            </div>
            <div className="col-3" style={{marginBottom:'10%', marginTop:'10%'}}>
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
                <div className="col align-self-end padding0">
                  <img src={title} style={{width:'100%'}} />
                  <div className="AllerRegular text-right" style={{fontSize:'0.74em', color:'white',marginTop:'6%'}}>
                    Tiene el objetivo de ser una guia para los
                    niños y niñas en sus primeros pasos a la 
                    experimentación y conocimiento de 
                    sonidos, números, colores y formas
                  </div>
                </div>
              </div>
            </div>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="cucu2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Cucu;