import * as React from 'react';
import Page, { PageProps } from './page';

import { animated } from 'react-spring';
import Link from '../components/link';

interface WelcomeProps extends PageProps{
  none?: any,
  style: any
};

class Welcome extends Page<WelcomeProps> {
  public render() {
    return (
      <animated.div className="center-content center-vertical full absolute" style={this.props.style}>
        <Link page="menu" transition="MOVE_RIGHT">
          <div className="container" style={{alignSelf:'center'}}>
            <div className="row justify-content-center">
              <div className="col-6 big-text">
                Cantaleta Atemporal
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 concept-text">
                Surge como mi propio metodo de comunicacion a traves de reiterados procesos
              </div>
            </div>
          </div>
        </Link>
      </animated.div>
    );
  }
}

export default Welcome;