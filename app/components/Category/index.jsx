import React from 'react'
import ReactSwipe from 'react-swipe'
import { Carousel } from 'antd'

class Category extends React.Component {
  render() {

    return (
      <div>
          <div>category</div>
          <Carousel>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
      </div>
    );
  }

}

export default Category
