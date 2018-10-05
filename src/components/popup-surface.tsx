import * as React from 'react';
import { animated, config, Spring} from 'react-spring';

class PopUpSurface {
  public render() {
    return (
      <div className="full" style={{backgroundColor:'#BBD54F'}}>
        <Spring 
          from={{boxShadow: '-20px 10px 5px rgba(0, 0, 0, 1)', marginTop:0}} 
          to={{boxShadow: '-130px 45px 15px rgba(0, 0, 0, .3)', marginTop:-30}} 
          config={config.slow} 
          delay={200}>
        {styles => 
          <animated.div className="laydown" style={{
            alignSelf:'center',
            backgroundColor: 'white', 
            borderRadius: '5%',
            height:500,
            width: 500,
            ...styles
          }}>
            {' '}
          </animated.div>
        }
        </Spring>
      </div>
    );
  }
}

export default PopUpSurface;