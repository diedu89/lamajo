import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import onuFrame from '../css/images/onu-frame.png';
import title from '../css/images/onu-process-title.png';

import LeftArrow from '../components/left-arrow';
import Link from '../components/link'

interface Onu2Props extends PageProps{
  style: any
};

class Onu2 extends Page<Onu2Props> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full blue absolute" style={this.props.style}>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="onu1" transition="MOVE_LEFT">
                <LeftArrow/>
              </Link>
            </div>
            <div className="col-6" style={{padding:'10% 0 0 3%'}}>
              <img src={onuFrame} style={{width:"100%"}}/>
            </div>
            <div className="col-3 offset-1" style={{marginBottom:'10%', marginTop:'10%'}}>
              <div className="row full">
                <div className="col align-self-start">
                  <div className="row">
                    <div className="col-4 offset-8 hvr-pulse-grow" style={{padding: '3%'}}>
                      <Link page="menu" transition="MOVE_LEFT">
                        <img src={btnMenu} style={{width:'100%'}}/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="col align-self-end" style={{padding:0}}>
                  <div className="row">
                    <div className="col-8 offset-4" style={{padding:0}}>
                      <img src={title} style={{width:'100%'}} />
                    </div>
                  </div>
                  <div className="AllerRegular text-right" style={{fontSize:'0.73em', color:'white',marginTop:'6%'}}>
                    La inclusividad fue el tema principal para mi <br /> 
                    pieza, complementada con color naranja, el <br />
                    cual era requisito de la campaña.
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

export default Onu2;