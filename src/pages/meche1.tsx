import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import btnMenu from '../css/images/btn-menu-white.svg';
import book from '../css/images/meche/book1.png';

import ColorBar from '../components/color-bar';
import GrowFade from '../components/grow-fade';
import Link from '../components/link'
import RightArrow from '../components/right-arrow';

interface MecheProps extends PageProps{
  style: any
};

class Meche extends Page<MecheProps> {
  public render() {
    return (
      <animated.div 
        className="center-content-spaced full blue absolute meche" style={this.props.style}>
        <div className="containe" style={{height:'100%'}}>
          <div className="absolute full">
            <GrowFade axis="X">
              <img src={book} style={{width:'100%'}}/>
            </GrowFade>
          </div>
          <ColorBar />
          <div className="row" style={{height:'100%'}}>
            <div className="col-4 offset-7 padding0" style={{marginBottom:'5%', marginTop:'5%'}}>
              <div className="row full">
                <div className="col align-self-start">
                  <div className="row">
                    <div className="col-3 offset-9 hvr-pulse-grow" style={{padding: '3%'}}>
                      <Link page="menu" transition="FADE">
                        <img src={btnMenu} style={{width:'100%'}}/>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-100" />
                <div className="col align-self-end padding0" style={{marginTop:'5%'}}>
                  <div className="AllerRegular text-right" style={{fontSize:'0.76em', color:'white',marginTop:'6%'}}>
                    Con el equipo, decidimos profundizar en el tema de la 
                    desigualdad de género creando un documento informativo 
                    y a “La Menche” para generar consciencia de una mejor 
                    manera, desde temprana edad.
                  </div>
                </div>
              </div>
            </div>
            <div className="col align-self-center" style={{padding:0}}>
              <Link page="meche2" transition="MOVE_RIGHT">
                <RightArrow/>
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Meche;