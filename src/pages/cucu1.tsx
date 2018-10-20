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
import Link from '../components/link'

interface CucuProps extends PageProps{
  style: any
};

class Cucu extends Page<CucuProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full green absolute" style={this.props.style}>
        <ColorBar />
        <div className="absolute row full">
          <div className="col-2" style={{padding:0}}>
            <img src={featherTopLeft} style={{width:'100%'}}/>
            <img src={featherBottomLeft} style={{width:'100%', position:'absolute', bottom:0, left:0}}/>
          </div>
          <div className="col-3 offset-3" style={{display:'flex'}}>
            <img src={featherBottom} style={{width:'100%', alignSelf:'flex-end'}}/>
          </div>
        </div>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-7 offset-1" style={{marginTop: '6%', padding:'4%'}}>
              <img src={device} style={{width:"100%"}}/>
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
                <div className="col align-self-end">
                  <img src={title} style={{width:'100%'}} />
                  <div className="AllerRegular text-right" style={{fontSize:'0.74em', color:'white',marginTop:'6%'}}>
                    Colaboración en conjunto con <br />
                    <b>ONU MUJERES El Salvador</b>, para la <br />
                    campaña “Pinta el mundo de naranja”.
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