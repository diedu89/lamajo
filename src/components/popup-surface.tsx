import * as React from 'react';
import { animated, config, Spring} from 'react-spring';

const PopUpSurface = (props:{image:any, style?:any, delay:number}) => 
      <div style={{width:'100%', ...props.style}} className="popup">
        <Spring 
          native={true}
          from={{boxShadow: '-20px 10px 5px rgba(0, 0, 0, 1)', opacity:0, marginTop:0}} 
          to={{boxShadow: '-30px 28px 15px; rgba(0, 0, 0, .3)', opacity:1, marginTop:-30}} 
          config={config.slow} 
          delay={props.delay}>
        {styles => 
          <animated.div className="laydown" style={{
            alignSelf:'center',
            backgroundColor: 'white', 
            borderRadius: '5%',
            width:'100%',
            ...styles
          }}>
            <img style={{width:'100%'}} src={props.image} />
          </animated.div>
        }
        </Spring>
      </div>

export default PopUpSurface;