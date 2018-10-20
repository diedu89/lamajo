import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

// import Link from '../components/link';
import RightArrow from '../components/right-arrow';

import btnMenu from '../css/images/btn-menu-white.svg';
import product from '../css/images/dustchys/product.png';
import table from '../css/images/dustchys/table.jpg';
import title from '../css/images/dustchys/title.png';

import ColorBar from '../components/color-bar';
import Link from '../components/link'
import SideFade from '../components/side-fade';

interface DustchysProps extends PageProps{
  style: any
};

class Dustchys extends Page<DustchysProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full tomato absolute dustchys" style={this.props.style}>
        <div className="absolute" style={{right:0, bottom:0, padding:0}}>
          <img src={table} style={{width:'100%'}} />
        </div>
        <ColorBar />
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-7 offset-1 align-self-end" style={{padding:0, marginBottom:'6%'}}>
              <SideFade direction={-1}>
                <img src={product} style={{width:'125%'}}/>
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
                <div className="col align-self-end" style={{padding:0}}>
                  <SideFade delay={300}>
                    <img src={title} style={{width:'100%'}} />
                  </SideFade>
                  <SideFade delay={600}>
                    <div className="AllerRegular text-right" style={{fontSize:'0.72em', color:'black',marginTop:'26%'}}>
                    Isologo creado para <br />
                    <b>“DUTCHY’S - THE ORIGINAL DUTCH WAFFLE”,</b><br />
                    trayendo la costumbre en pastelería holandesa 
                    al corazón de El Salvador.
                    </div>
                  </SideFade>
                </div>
              </div>
            </div>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="dustchys2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Dustchys;