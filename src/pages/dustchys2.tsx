import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import title from '../css/images/dustchys/process-title.png';
import trazo1 from '../css/images/dustchys/trazo-1.png';
import trazo2 from '../css/images/dustchys/trazo-2.png';

import LeftArrow from '../components/left-arrow';
import Link from '../components/link'

interface DustchysProps extends PageProps{
  style: any
};

class Dustchys extends Page<DustchysProps> {
  public render() {
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
                      <Link page="menu" transition="MOVE_LEFT">
                        <img src={btnMenu} style={{width:'100%'}}/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="col" style={{padding:'1px'}}>
                  <img src={trazo1} style={{width:'100%'}} />
                </div>
                <div className="w-100" />
                <div className="col" style={{padding:'1px'}}>
                  <img src={trazo2} style={{width:'100%'}} />
                </div>
                <div className="w-100" />
                <div className="col align-self-end" style={{padding:0}}>
                  <div className="row">
                    <div className="col-8 offset-4">
                      <img src={title} style={{width:'100%'}} />
                    </div>
                  </div>
                  <div className="AllerRegular text-right" style={{fontSize:'0.74em', color:'white',marginTop:'6%'}}>
                    Bocetaje de personaje, estilización y <br /> 
                    humanización, pruebas de color y de <br />
                    composición tipografía.
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

export default Dustchys;