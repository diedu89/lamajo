import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-blue.svg';
import kotta from '../css/images/kotta/kotta.gif';
import trazo1 from '../css/images/kotta/trazo1.png';
import trazo2 from '../css/images/kotta/trazo2.png';
import process from '../css/images/process-blue.png';

import LeftArrow from '../components/left-arrow';
import Link from '../components/link';
import SocialNetworkLinks from '../components/social-networks-links';
import Tools from '../components/tools';

interface KottaProps extends PageProps{
  style: any
};

class Kotta extends Page<KottaProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full absolute kotta2" style={this.props.style}>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-1 align-self-center" style={{padding:0}}>
              <Link page="kotta1" transition="MOVE_LEFT">
                <LeftArrow/>
              </Link>
            </div>
            <div className="col-7 align-self-center padding0">
              <img src={kotta} style={{width:'100%'}}/>
            </div>
            <div className="col-3" style={{marginBottom:'5%', marginTop:'5%'}}>
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
                <div className="col padding0">
                  <img src={trazo1} style={{width:'100%', borderRadius:'5%', margin:'5% 0'}} />
                  <img src={trazo2} style={{width:'100%', borderRadius:'5%', margin:'5% 0'}} />
                  <div className="row" style={{marginTop:'5%'}}>
                    <div className="col-9 offset-3 padding0" style={{textAlign:'right'}}>
                      <img src={process} style={{width:'66%'}} />
                      <div className="AllerRegular text-right" style={{fontSize:'0.74em',marginTop:'6%'}}>
                        Es por eso que la experimentación de texturas, 
                        luces y elementos fueron claves (y retos) para 
                        lograr la unficiación de personaje y fondo.
                      </div>
                      <Tools className="col padding0 row text-right" 
                        style={{margin:'3% 0 0 0'}}
                        color="#4acec4" 
                        tools={['Paint Tool Sai','Photoshop']}/>
                      <SocialNetworkLinks style={{color:'#4acec4'}} className="col-6 offset-6 padding0 row" instagram="Bg7ndkMnXUk" behance="64421247/S-u-n-s-e-t"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1" />
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Kotta;