import React from 'react'
import './Welcome.css'
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


var style = {
  display: 'flex' ,
    };

var debug = {
  border: "1px solid black"
}

class Welcome extends React.Component {
  scroll() {
    scroller.scrollTo('Profile', {
      duration: 1000,
      delay: 50,
      smooth: "easeInQuad",
    })
  }

  render() {
    return (<div className="welcome">
                <div className="header">
                  <h1 style={style}>
                    <strong>Hi, I'm Thitiwat Thongbor.</strong>
                  </h1>
                    SOFTWARE AND KNOWLEDGE ENGINEERING
                </div>
                <div className="abc" onClick={this.scroll}>
                  <div className="arrow bounce"></div>
                </div>
            </div>)
  }
}

export default Welcome
