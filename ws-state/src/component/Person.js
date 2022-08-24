import React, { Component } from 'react'


export default class Person extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fullname: "Nefoussi Farah",
            bio: "This is the bio",
            profession: "Student",
            imgSrc :"farah.jpeg",
        };
      }
  render() {
    return (
      <div >
          <h2> {this.state.fullname}</h2>
          <h2> {this.state.bio}</h2>
          <h2> {this.state.profession}</h2>
          <img src= {this.state.imgSrc} alt="image1" /> 

      </div>
    )
  }
}
