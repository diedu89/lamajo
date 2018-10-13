import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import book2 from '../css/images/meche/book2.png';
import book3 from '../css/images/meche/book3.png';
import trazo1 from '../css/images/meche/trazo1.png';
import trazo2 from '../css/images/meche/trazo2.png';
import title from '../css/images/process-white.png';

import LeftArrow from '../components/left-arrow';
import Link from '../components/link'

interface Meche2Props extends PageProps{
  style: any
};

class Meche2 extends Page<Meche2Props> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full blue absolute meche2" style={this.props.style}>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="meche1" transition="MOVE_LEFT">
                <LeftArrow/>
              </Link>
            </div>
            <div className="col-7" style={{padding:'7% 0 0 3%'}}>
              <img src={book2} style={{width:"100%"}}/>
              <img src={book3} style={{width:"100%", marginTop:"-4%"}}/>
            </div>
            <div className="col-3 padding0" style={{marginBottom:'5%', marginTop:'5%'}}>
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
                  <img src={trazo1} className="trazo" style={{width:'100%'}}/>
                </div>
                <div className="w-100" />
                <div className="col" style={{padding:'1%'}}>
                  <img src={trazo2} className="trazo" style={{width:'100%'}}/>
                </div>
                <div className="w-100" />
                <div className="col align-self-end padding0" style={{marginTop:'5%'}}>
                  <div className="col-8 offset-4 padding0" style={{padding:0}}>
                    <img src={title} style={{width:'100%'}} />
                  </div>
                  <div className="AllerRegular text-right" style={{fontSize:'0.73em', color:'white',marginTop:'6%'}}>
                    Se realizó una historia basada en la vida de los 
                    y las estudiantes en las escuelas, acompañada 
                    de ilustraciones que les caracterizaran.
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

export default Meche2;