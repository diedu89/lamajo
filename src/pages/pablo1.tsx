import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

// import Link from '../components/link';
import RightArrow from '../components/right-arrow';

import btnMenu from '../css/images/btn-menu-white.svg';
import title from '../css/images/pablo/title.png';

import ColorBar from '../components/color-bar';
import Link from '../components/link'

import book from '../css/images/pablo/book.png';

interface PabloProps extends PageProps{
  style: any
};

class Pablo extends Page<PabloProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full tomato absolute pablo" style={this.props.style}>
        <div className="absolute col-12 book-bg">
          <img src={book}/>
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
                    Colaboración en conjunto con <br />
                    <b>Pablo MUJERES El Salvador</b>, para la <br />
                    campaña “Pinta el mundo de naranja”.
                  </div>
                </div>
              </div>
            </div>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="pablo2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Pablo;