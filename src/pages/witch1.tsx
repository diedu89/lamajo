import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';
// import Link from '../components/link';
import RightArrow from '../components/right-arrow';

import btnMenu from '../css/images/btn-menu-white.svg';
import title from '../css/images/witch/title.png';

import ColorBar from '../components/color-bar';
import Link from '../components/link'
import SideFade from '../components/side-fade';

interface WitchProps extends PageProps{
  style: any
};

class Witch1 extends Page<WitchProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full absolute witch" style={this.props.style}>
        <ColorBar />
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-3 offset-8" style={{marginBottom:'10%', marginTop:'10%'}}>
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
                  <SideFade delay={300}>
                    <img src={title} style={{width:'100%'}} />
                  </SideFade>
                  <SideFade delay={600}>
                    <div className="AllerRegular text-right" style={{fontSize:'0.74em', color:'white',marginTop:'6%'}}>
                      Una de las partes fundamentales al 
                      momento de crear un personaje, es 
                      la realización de su entorno.
                    </div>
                  </SideFade>
                </div>
              </div>
            </div>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="witch2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Witch1;