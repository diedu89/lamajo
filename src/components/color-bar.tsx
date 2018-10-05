import * as React from 'react'

import { animated, config, Spring, Trail } from 'react-spring';

class ColorBar extends React.PureComponent<{},{loaded:boolean}> {
 
  constructor(props:any){
    super(props);
    this.state = {loaded:false}
  }

  public render() {
    const items = ['#f5a730','#9d68aa','#49cec4']
    return (
      <Spring
        native={true}
        delay={400}
        onRest={this.loadEnded}
        from={{ marginLeft: '100%' }}
        to={{ marginLeft: '0%' }}>
        {styles => (
          <animated.div style={{ backgroundColor: 'white', overflow: 'hidden', height: '10px', ...styles }}>
            {this.state.loaded && (
              <Trail
                native={true}
                config={config.gentle}
                from={{ opacity: 0, left: '100%' }}
                to={{ opacity: 1, left: '0%' }}
                keys={items}>
                {items.map(item => ({ left, opacity }:{left:number, opacity:number}) => (
                  <animated.div
                    className="box"
                    style={{
                      backgroundColor: item,
                      left,
                      opacity,
                    }}
                  />
                ))}
              </Trail>
            )}
          </animated.div>
        )}
      </Spring>
    )
  }

  private loadEnded = () => this.setState({ loaded: true })

}

export default ColorBar