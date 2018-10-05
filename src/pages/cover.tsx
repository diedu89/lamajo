import * as React from 'react';
import { animated, config, Spring } from 'react-spring';
import Link  from '../components/link';
import Page, { PageProps } from './page';

import logo from '../css/images/logo-text.png';

interface CoverProps extends PageProps{
  onClick?: ()=>void,
  style: any
};

class Cover extends Page<CoverProps> {
  public render() {
    const {style} = this.props;
    return (
      <animated.div className="full absolute cover" style={style}>
        <div className="full">
          <div className="row align-items-center full">
            <Spring delay={300} from={{opacity:0}} to={{opacity:1}} config={config.slow}>
              {styles => 
                <div className="col-2 offset-5" style={{
                  padding:0,
                  ...styles
                }}>
                  <Link page="welcome" transition="FADE">
                    <img src={logo} alt="" style={{width:'100%'}}/>
                  </Link>
                </div>
              }
            </Spring>
          </div>
        </div>
      </animated.div>
    );
  }
}

export default Cover;