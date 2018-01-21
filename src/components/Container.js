import React from 'react'
import Welcome from '../components/Welcome'
import Profile from '../components/Profile'
import About from '../components/About'
import Award from '../components/Award'
import Project from '../components/Project'
import '../components/Container.css'

class Container extends React.Component {

  constructor( props ) {
    super( props )
    this.state = props
  }

  render() {
    return (<div>
              <Welcome/>
              <div className="container">
                <div className="about row">
                  <div className="col-md-4">
                    <Profile data={this.state}/>
                  </div>
                  <div className="col-md-8">
                    <About/>
                  </div>
                </div>
                <Award/>
                <Project/>
              </div>
            </div>)
  }
}

export default Container