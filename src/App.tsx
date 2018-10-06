import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import { config, Transition } from 'react-spring';

import Contact from './pages/contact';
import Cover from './pages/cover';
import Cucu1 from './pages/cucu1';
import Cucu2 from './pages/cucu2';
import Dustchys1 from './pages/dustchys1';
import Dustchys2 from './pages/dustchys2';
import Menu from './pages/menu';
import Onu from './pages/onu';
import Onu2 from './pages/onu2';
import Pablo1 from './pages/pablo1';
import Pablo2 from './pages/pablo2';
import Welcome from './pages/welcome';

const pages = {
  'contact': (style:any) => <Contact style={style} />,
  'cover': (style:any) => <Cover style={style} />,
  'cucu1': (style:any) => <Cucu1 style={style} />,
  'cucu2': (style:any) => <Cucu2 style={style} />,
  'dustchys1': (style:any) => <Dustchys1 style={style} />,
  'dustchys2': (style:any) => <Dustchys2 style={style} />,
  'menu':  (style:any) => <Menu style={style} />,
  'onu1': (style:any) => <Onu style={style} />,
  'onu2': (style:any) => <Onu2 style={style} />,
  'pablo1': (style:any) => <Pablo1 style={style} />,
  'pablo2': (style:any) => <Pablo2 style={style} />,
  'welcome': (style:any) => <Welcome style={style} />,
}

interface AppProps{
  from:any, enter:any, leave: any, page: string
}

interface AppState{
  scale:number
}

class App extends React.PureComponent<AppProps, AppState>{
  
  public render() {
    const {from, enter, leave, page} = this.props;
    // tslint:disable-next-line:no-console
    console.log(this.props);
    return (
      <div id="app" className="full">
        <div className="very-specific-design">
          <Transition
            config={config.slow}
            from={from}
            enter={enter}
            leave={leave}>
            {pages[page]}
          </Transition>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state:any, ownProps:any) => {
  const { app } = state;
  return {
    ...app,
    ...ownProps
  }
}

export default connect(mapStateToProps)(App);