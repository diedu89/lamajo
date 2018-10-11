import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-blue.svg';
import process from '../css/images/process-blue.png';
import book from '../css/images/witch/book.png';
import trazo1 from '../css/images/witch/trazo1.png';
import trazo2 from '../css/images/witch/trazo2.png';
import trazo3 from '../css/images/witch/trazo3.jpg';

import ColorBar from '../components/color-bar';
import LeftArrow from '../components/left-arrow';
import Link from '../components/link'

interface WitchProps extends PageProps{
  style: any
};

class Witch1 extends Page<WitchProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full absolute witch2" style={this.props.style}>
        <div className="absolute col-4" style={{right:0, bottom:'5%', padding:0}}>
          <ColorBar />
        </div>
        <div className="absolute col-7 padding0">
          <img src={book} style={{width:'100%'}}/>
        </div>
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="witch1" transition="MOVE_LEFT">
                <LeftArrow/>
              </Link>
            </div>  
            <div className="col-4 offset-6" style={{marginBottom:'5%', marginTop:'5%'}}>
              <div className="row full">
                <div className="col align-self-start">
                  <div className="row">
                    <div className="col-3 offset-9 hvr-pulse-grow" style={{padding: '3%'}}>
                      <Link page="menu" transition="MOVE_LEFT">
                        <img src={btnMenu} style={{width:'100%'}}/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="col padding0">
                  <div className="row" style={{margin:0}}>
                    <div className="col padding0" style={{marginRight:'2%'}}>
                      <img src={trazo1} className="trazo" />
                    </div>
                    <div className="col padding0" style={{marginLeft:'2%'}}>
                      <img src={trazo2} className="trazo" />
                    </div>
                  </div>
                  <img src={trazo3} className="trazo3" />
                  <div className="row" style={{marginTop:'20%'}}>
                    <div className="col-9 offset-3 padding0" style={{textAlign:'right'}}>
                      <img src={process} style={{width:'66%'}} />
                      <div className="AllerRegular text-right" style={{fontSize:'0.74em',marginTop:'6%'}}>
                        Es por eso que la experimentación de texturas, 
                        luces y elementos fueron claves (y retos) para 
                        lograr la unficiación de personaje y fondo.
                      </div>
                    </div>
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

export default Witch1;