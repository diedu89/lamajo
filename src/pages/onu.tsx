import * as React from 'react';
import Page, { PageProps } from './page';

import { animated, Spring } from 'react-spring';
import { Easing, TimingAnimation } from 'react-spring/dist/addons'

// import Link from '../components/link';
import RightArrow from '../components/right-arrow';

import btnMenu from '../css/images/btn-menu-white.svg';
import title from '../css/images/onu-title.png';
import poster from '../css/images/poster.png';

import ColorBar from '../components/color-bar';
import Link from '../components/link'

interface OnuProps extends PageProps{
  style: any
};

class Onu extends Page<OnuProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full blue absolute" style={this.props.style}>
        <ColorBar />
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-6 offset-1 posterContainer">
              <Spring
                delay={400}
                native={true}
                impl={TimingAnimation}
                config={{ easing: Easing.bounce, duration: 1200 }}
                from={{ marginTop: '-150%' }}
                to={{ marginTop: '0%' }}>
                  {
                    (styles)=><animated.img src={poster} style={{width:"100%", ...styles}}/>
                  }
              </Spring>
            </div>
            <div className="col-3 offset-1" style={{marginBottom:'10%', marginTop:'10%'}}>
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
              <Link page="onu2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Onu;