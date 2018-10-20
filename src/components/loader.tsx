import * as React from 'react'

import car from '../css/images/loading.gif';

interface LoaderProps{
  progress: {success:[string], errors:[string], urls:[string]}
}

export default class Loader extends React.Component<LoaderProps>{
  public render() {
    const {progress: {success, errors, urls}} = this.props;
    let progress = 0;
    if(success && errors && urls) {
      progress = (success.length + errors.length ) / urls.length * 100;
    }

    return (
      <div className="full" style={{display: 'flex', justifyContent:'center', backgroundColor:'white'}}>
        <div style={{alignSelf:'center'}}>
          <img src={car} alt="loading"/>
          <div style={{height:'1em', border:'1px solid #4acec4', marginTop:'10%'}}>
            <div className="blue" style={{width:`${progress}%`, height:'100%'}} />
          </div>
          <div style={{color: '#777', marginTop:'5%', fontWeight:'bold'}}>{Math.trunc(progress)} %</div>
        </div>
      </div>
    )
  }
}

