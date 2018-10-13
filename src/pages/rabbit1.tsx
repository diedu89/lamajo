import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

// import Link from '../components/link';
import RightArrow from '../components/right-arrow';

import title from '../css/images/astronejo/title.png';
import btnMenu from '../css/images/btn-menu-white.svg';

import rabbitVideo from '../css/videos/rabbit.mp4';

import ColorBar from '../components/color-bar';
import Link from '../components/link'

interface RabbitProps extends PageProps{
  style: any
};

class Rabbit extends Page<RabbitProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full absolute" style={this.props.style}>
        <div className="absolute full" style={{zIndex:0}}>
          <video src={rabbitVideo} style={{width:'100%', height:'100%'}} muted={true} autoPlay={true}/>
        </div>
        <div className="absolute col-4" style={{right:0, bottom:'5%', padding:0}}>
          <ColorBar />
        </div>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-3 offset-8 padding0" style={{marginBottom:'10%', marginTop:'10%'}}>
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
                    Astronejo nace como un personaje basado en 
                    recuerdos de infancia, donde la primer mascota 
                    de La Majo, se convierte en explorador espacial.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1 align-self-center" style={{padding:0}}>
              <Link page="rabbit2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Rabbit;