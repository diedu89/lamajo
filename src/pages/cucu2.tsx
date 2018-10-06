import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import featherBottomLeft from '../css/images/cucu/feather-bottom-left.png'; 
import featherTopLeft from '../css/images/cucu/feather-top-left.png'; 
import screen1 from '../css/images/cucu/screen1.jpg'
import screen2 from '../css/images/cucu/screen2.jpg'
import screen3 from '../css/images/cucu/screen3.jpg'
import screen4 from '../css/images/cucu/screen4.jpg'
import screen5 from '../css/images/cucu/screen5.jpg'
import title from '../css/images/cucu/title.png';

import LeftArrow from '../components/left-arrow';
import Link from '../components/link'
import PopUpSurface from '../components/popup-surface';

interface CucuProps extends PageProps{
  style: any
};

class Cucu extends Page<CucuProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full green absolute" style={this.props.style}>
        <div className="absolute row full">
          <div className="col-2" style={{padding:0}}>
            <img src={featherTopLeft} style={{width:'100%'}}/>
            <img src={featherBottomLeft} style={{width:'100%', position:'absolute', bottom:0, left:0}}/>
          </div>
          <div className="col-3 col align-self-center" style={{padding:'0 2%'}}>
            <PopUpSurface image={screen2} delay={400}/>
            <PopUpSurface image={screen1} delay={100}/>
          </div>
          <div className="col-3 col align-self-center" style={{padding:'0 2%', marginTop:'-7%'}}>
            <PopUpSurface image={screen3} delay={1000} style={{padding: '0 5%', transform:'translateX(-32%) translateY(-15%)'}}/>
            <PopUpSurface image={screen4} delay={700}/>
          </div>
          <div className="col-3 col align-self-center" style={{padding:'0 2%'}}>
            <PopUpSurface image={screen5} delay={1300} style={{padding:'0 5%', transform:'translateX(-32%) translateY(-10%)'}} />
          </div>
        </div>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="cucu1" transition="MOVE_LEFT">
                <LeftArrow />
              </Link>
            </div>
            <div className="col-3 offset-7" style={{marginBottom:'10%', marginTop:'10%'}}>
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
            <div className="col align-self-center" />
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Cucu;