import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import title from '../css/images/pablo/process-title.png';
import terrain from '../css/images/pablo/terrain.png';
import trazo1 from '../css/images/pablo/trazo-1.png';
import trazo2 from '../css/images/pablo/trazo-2.png';
import trazo3 from '../css/images/pablo/trazo-3.png';

import ColorBar from '../components/color-bar';
import LeftArrow from '../components/left-arrow';
import Link from '../components/link'

import pablo from '../css/images/pablo/book.png';

interface PabloProps extends PageProps{
  style: any
};

class Pablo extends Page<PabloProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full tomato absolute pablo" style={this.props.style}>
        <div className="absolute offset-6 col-9 book-bg-2">
          <img src={pablo}/>
        </div>
        <div className="absolute col-4" style={{right:0, bottom:'5%', padding:0}}>
          <ColorBar />
        </div>
        <div className="absolute col-7" style={{left:0, bottom:0, padding:0}}>
          <img src={terrain} style={{width: '105%'}}/>
        </div>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="pablo1" transition="MOVE_LEFT">
                <LeftArrow />
              </Link>
            </div>
            <div className="col-7">
              <div className="row trazo12-container">
                <div className="col-6" style={{paddingLeft: '14%', marginLeft:'-10%'}}>
                  <img src={trazo1} style={{width:'100%'}}/>
                </div>
                <div className="col-6" style={{paddingRight: '14%'}}>
                  <img src={trazo2} style={{width:'100%'}}/>
                </div>
              </div>
              <div className="row">
                <div className="col-6 offset-2" style={{padding:'10% 0 0 0'}}>
                  <img src={trazo3} style={{width:'100%'}}/>
                </div>
              </div>
            </div>
            <div className="col-3" style={{marginBottom:'10%', marginTop:'10%'}}>
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
                    La pieza tomó forma mediante el párrafo de la 
                    historia del personaje, bocetería, aplicación de color
                    y texturas y diagramación del extracto del cuento.
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

export default Pablo;