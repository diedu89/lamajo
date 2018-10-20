import * as React from 'react';
import './App.css';

import { connect } from 'react-redux';

import Preload from 'react-preload';
import { config, Transition } from 'react-spring';

import assets from './assets'

import About from './pages/about';
import Contact from './pages/contact';
import Cover from './pages/cover';
import Cucu1 from './pages/cucu1';
import Cucu2 from './pages/cucu2';
import Dustchys1 from './pages/dustchys1';
import Dustchys2 from './pages/dustchys2';
import Kotta1 from './pages/kotta1';
import Kotta2 from './pages/kotta2';
import Meche1 from './pages/meche1';
import Meche2 from './pages/meche2';
import Menu from './pages/menu';
import Onu from './pages/onu';
import Onu2 from './pages/onu2';
import Pablo1 from './pages/pablo1';
import Pablo2 from './pages/pablo2';
import Rabbit1 from './pages/rabbit1';
import Rabbit2 from './pages/rabbit2';
import Welcome from './pages/welcome';
import Witch1 from './pages/witch1';
import Witch2 from './pages/witch2';

import Loader from './components/loader';

import car from './css/images/loading.gif';

const pages = {
  'about': (style:any) => <About style={style} />,
  'contact': (style:any) => <Contact style={style} />,
  'cover': (style:any) => <Cover style={style} />,
  'cucu1': (style:any) => <Cucu1 style={style} />,
  'cucu2': (style:any) => <Cucu2 style={style} />,
  'dustchys1': (style:any) => <Dustchys1 style={style} />,
  'dustchys2': (style:any) => <Dustchys2 style={style} />,
  'kotta1':  (style:any) => <Kotta1 style={style} />,
  'kotta2':  (style:any) => <Kotta2 style={style} />,
  'meche1':  (style:any) => <Meche1 style={style} />,
  'meche2':  (style:any) => <Meche2 style={style} />,
  'menu':  (style:any) => <Menu style={style} />,
  'onu1': (style:any) => <Onu style={style} />,
  'onu2': (style:any) => <Onu2 style={style} />,
  'pablo1': (style:any) => <Pablo1 style={style} />,
  'pablo2': (style:any) => <Pablo2 style={style} />,
  'rabbit1': (style:any) => <Rabbit1 style={style} />,
  'rabbit2': (style:any) => <Rabbit2 style={style} />,
  'welcome': (style:any) => <Welcome style={style} />,
  'witch1': (style:any) => <Witch1 style={style} />,
  'witch2': (style:any) => <Witch2 style={style} />,
}

interface AppProps{
  from:any, enter:any, leave: any, page: string
}

interface AppState{
  scale:number,
}

class App extends React.PureComponent<AppProps, AppState>{

  public render() {
    const {from, enter, leave, page} = this.props;
    const renderLoader = (progress:any)=><Loader progress={progress}/>; 
    return (
      <div id="app" className="full">
        <Preload
          className="full"
          loaderIndicator={<div>cargando...</div>}
          images={[car]}>
          <Preload
            loadingIndicator={renderLoader}
            images={assets}
            >
            <div className="very-specific-design">
              <Transition
                config={config.slow}
                from={from}
                enter={enter}
                leave={leave}>
                {pages[page]}
              </Transition>
            </div>
          </Preload>
        </Preload>
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