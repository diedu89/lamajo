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
                <div style={{animationName: 'hvr-pulse-shrink', animationDuration:'2s', animationIterationCount:'infinite', animationDirection:'alternate'}}>
                  Cantaleta
                  Atemporal
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-6 concept-text" style={{padding:0, marginTop:'3%'}}>
                Surge como mi propio método de comunicación a través de reiterados procesos
                ilustrativos, donde el trazo es mi principal portavoz, adaptable a distintas 
                situaciones que requieran soluciones gráficas/editoriales.
              </div>
            </div>
          </div>
        </Link>
      </animated.div>
    );
  }
}

export default Welcome;