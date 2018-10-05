import * as React from 'react'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

interface LinkProps{
  page: string,
  transition: string,
  goto: (page:string,transition:string)=>{},
  style?: any
}

class Link extends React.Component<LinkProps>{
  public render() {
    const {goto, page, transition, style, children, ...rest} = this.props;
    const onClick = ()=>goto(page, transition);
    return (
      <div style={{cursor:'pointer', ...style}} onClick={onClick} {...rest}>
        {children}
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  goto: (page:string,transition:string) => dispatch({type:'LOCATION_CHANGE', transition, page})
});

export default connect((state, ownProps)=>({...ownProps}), mapDispatchToProps)(Link);