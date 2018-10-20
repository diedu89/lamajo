import * as React from 'react'

import { animated, config, Trail } from 'react-spring';

class SideFade extends React.PureComponent {
 
  constructor(props:any){
    super(props);
  }

  public render() {
    const { children } = this.props;
    const keys:number[] = [];
    const items = React.Children.map(children, (child, i) => {
      keys.push(i);
      return child;
    });
    return (
      <Trail
        native={true}
        config={config.stiff}
        from={{ opacity: 0, marginLeft: '100%' }}
        to={{ opacity: 1, marginLeft: '0%' }}
        keys={keys}>
        {items.map(item => ({ marginLeft, opacity }:{marginLeft:number, opacity:number}) => (
          <animated.div
            style={{
              marginLeft,
              opacity,
            }}>
            {item}
          </animated.div>
        ))}
      </Trail>
    )
  }
}

export default SideFade