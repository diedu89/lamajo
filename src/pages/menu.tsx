import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';

import DownArrow from '../components/down-arrow';
import Link from '../components/link';
import MenuItem from '../components/menu-item';
import UpArrow from '../components/up-arrow';

import astronejo from '../css/images/menu/astronejo.png';
import cucu from '../css/images/menu/cucu.png';
import dustchys from '../css/images/menu/dustchys.png';
import kotta from '../css/images/menu/kotta.png';
import menche from '../css/images/menu/menche.png';
import onu1 from '../css/images/menu/onu1.png';
import onu2 from '../css/images/menu/onu2.png';
import TBP from '../css/images/menu/TBP.png';
import witch from '../css/images/menu/witch.png';

interface MenuProps extends PageProps{
  style: any
};

class Menu extends Page<MenuProps> {
  public render() {
    return (
      <animated.div 
        className="full blue absolute menu" style={this.props.style}>
        <div className="containr">
          <div className="row justify-content-center">
            <div className="col-1">
              <Link page="about" transition="DOWN">
                <DownArrow />
              </Link>
            </div>
          </div>
          <div className="flex-container">
            <MenuItem page="onu1" image={onu1}/>
            <MenuItem page="onu2" image={onu2}/>
            <MenuItem page="pablo1" image={TBP}/>
          </div>
          <div className="flex-container">
            <MenuItem page="meche1" image={menche}/>
            <MenuItem page="dustchys1" image={dustchys}/>
            <MenuItem page="rabbit1" image={astronejo}/>
          </div>
          <div className="flex-container">
            <MenuItem page="cucu1" image={cucu}/>
            <MenuItem page="witch1" image={witch}/>
            <MenuItem page="kotta1" image={kotta}/>
          </div>
          <div className="row justify-content-center">
            <div className="col-1">
              <Link page="contact" transition="UP">
                <UpArrow />
              </Link>
            </div>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Menu;