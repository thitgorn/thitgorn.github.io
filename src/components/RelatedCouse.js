import React from 'react'

const courses = ["Object-Oriented Programming I",
                "Object-Oriented Programming II",
                "Individual Software Development Process",
                "Individual Software Development Process Lab",
                "Abstract Data Types & Problem Solving",
                "Abstract Data Types Laboratory",
                "Software Development Training Camp",
                "Algorithm Design & Analysis",
                "Database Systems",
                "Computer System Laboratory",
                "Software Specification & Design",
                "Software Specification & Design Lab"]
var wrapper = {
  margin:"20px 10px 10px 10px"
}

class RelatedCouse extends React.Component {
  getCourse() {
    return courses.map((course,i) => {
      return <div key={i} className="col-md-6 col-sm-12">{course}</div>
    })
  }
  render() {
    return (<div style={wrapper}>
              <h1>Related courses</h1>
              <h5>(Software and knowledge engineering)</h5>
              <br/>
              <div className="row">
                {this.getCourse()}
              </div>
            </div>)
  }
}

export default RelatedCouse
