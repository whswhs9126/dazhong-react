import React from 'react'
import { BrowserHistory, withRouter } from 'react-router'


const BackBtn = withRouter(({history}) => (
        <div onClick={() => {
          history.push('/')
        }}>back</div>
      ))

class City extends React.Component {
  render() {
    return(
      <div>
        <BackBtn></BackBtn>
        <div>City</div>
      </div>
    )
  }

  backHandle() {
    this.props.history.push('/');
  }
}

export default City