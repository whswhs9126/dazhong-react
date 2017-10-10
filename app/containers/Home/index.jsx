import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    }
  }

  render() {
    return(
      <div>
        <HomeHeader cityName={this.props.userinfo.cityName}></HomeHeader>
        <Category></Category>
      </div>
    )
  }

  componentDidMount() {
  }

}

// ------------------------绑定Redux-------------------------
function mapStateProps(state) {
  return {
    userinfo: state.userinfo
  }
}

function mapDispatchToProps(dispatch) {
  return{
  }
}

export default connect(mapStateProps, mapDispatchToProps)(Home)






