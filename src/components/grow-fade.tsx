import * as React from 'react'

import { animated, config, Spring } from 'react-spring';

class GrowFade extends React.PureComponent<{delay?:number, axis?:string}>{
 
  constructor(props:any){
    super(props);
  }

  public render() {
    const { children, delay=0, axis='Y'} = this.props;
    return (
      <Spring
        delay={delay}
        native={true}
        config={config.slow}
        from={{ opacity: 0, transform: `scale${axis}(0)` }}
        to={{ opacity: 1, transform: `scale${axis}(1)` }}>
        {({ transform, opacity }:{transform:string, opacity:number}) => (
          <animated.div
            style={{
              opacity,
              transform,
            }}>
            {children}
          </animated.div>
        )}
      </Spring>
    )
  }
}

export default GrowFade