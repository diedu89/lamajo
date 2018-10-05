import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';
import MenuItem from '../components/menu-item';

import astronejo from '../css/images/menu/astronejo.png';
import bruja from '../css/images/menu/bruja.png';
import cucu from '../css/images/menu/cucu.png';
import dustchys from '../css/images/menu/dustchys.png';
import kotta from '../css/images/menu/kotta.png';
import menche from '../css/images/menu/menche.png';
import onu1 from '../css/images/menu/onu1.png';
import onu2 from '../css/images/menu/onu2.png';
import TBP from '../css/images/menu/TBP.png';

interface MenuProps extends PageProps{
  style: any
};

class Menu extends Page<MenuProps> {
  public render() {
    return (
      <animated.div 
        className="full blue absolute menu" style={this.props.style}>
        <div className="container">
          <div className="flex-container">
            <MenuItem page="onu1" image={onu1}/>
            <MenuItem page="onu2" image={onu2}/>
            <MenuItem page="pablo1" image={TBP}/>
          </div>
          <div className="flex-container">
            <MenuItem page="onu2" image={menche}/>
            <MenuItem page="onu2" image={dustchys}/>
            <MenuItem page="onu2" image={astronejo}/>
          </div>
          <div className="flex-container">
            <MenuItem page="onu2" image={cucu}/>
            <MenuItem page="onu2" image={bruja}/>
            <MenuItem page="onu2" image={kotta}/>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Menu;