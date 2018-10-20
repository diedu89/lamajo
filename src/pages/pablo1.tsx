import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

// import Link from '../components/link';
import RightArrow from '../components/right-arrow';

import btnMenu from '../css/images/btn-menu-white.svg';
import title from '../css/images/pablo/title.png';

import ColorBar from '../components/color-bar';
import Link from '../components/link'
import SideFade from '../components/side-fade';

import book from '../css/images/pablo/book.png';

interface PabloProps extends PageProps{
  style: any
};

class Pablo extends Page<PabloProps> {
  public render() {
    let delay=0;
    const step=500;
    return (
      <animated.div 
        className="center-content-spaced full tomato absolute pablo" style={this.props.style}>
        <div className="absolute col-12 book-bg">
          <SideFade direction={-1}>
            <img src={book}/>
          </SideFade>
        </div>
        
        <ColorBar />
        
        <div className="containe" style={{height:'100%'}}>
          <div className="row" style={{height:'100%'}}>
            <div className="col-3 offset-8 padding0" style={{marginBottom:'7%', marginTop:'10%'}}>
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
                  <div style={{padding:'5%'}}>
                    <SideFade delay={delay+=step}>
                      <img src={title} style={{width:'100%'}} />
                    </SideFade>
                  </div>
                  <SideFade delay={delay+=step}>
                    <div className="AllerRegular text-right" style={{fontSize:'0.74em', color:'white',marginTop:'6%'}}>
                      Propuesta de ilustración editorial, constó de la 
                      interpretación de un cuento infantil y la creación 
                      del personaje principal junto con su entorno
                      <br/><br/>
                      cliente: <b>THE BOOK PROJECT</b> 
                    </div>
                  </SideFade>
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