import * as React from 'react'

import { animated, config, Spring } from 'react-spring';

class SideFade extends React.PureComponent<{delay?:number, direction?:number, axis?:string, style?:any}>{
 
  constructor(props:any){
    super(props);
  }

  public render() {
    const { children, delay=0, direction=1, axis='X', style} = this.props;
    return (
      <Spring
        delay={delay}
        native={true}
        config={config.slow}
        from={{ opacity: 0, transform: `translate${axis}(${direction * 100}%)` }}
        to={{ opacity: 1, transform: `translate${axis}(0%)` }}>
        {({ transform, opacity }:{transform:string, opacity:number}) => (
          <animated.div
            style={{
              opacity,
              transform,
              ...style,
            }}>
            {children}
          </animated.div>
        )}
      </Spring>
    )
  }
}

export default SideFade