import * as React from 'react';
import { Fragment } from 'react';

export interface PageProps{
  none?:any
}

class Page<P extends PageProps, S = {}, SS = any> extends React.PureComponent<P, S, SS> {
  public render() {
    return (
      <Fragment>
        {this.props.children}
      </Fragment>
    )
  }
}

export default Page;