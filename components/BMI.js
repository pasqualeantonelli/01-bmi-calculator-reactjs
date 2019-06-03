import React, { Component } from 'react'

class BMI extends Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 5 * 12,  // five feet
            weight: 150  // 150 pounds
        }
    }


    render() {
        <div class="container">
            <h1>BMI Calculator</h1>
            <p>Height</p>
            <p>
                <input type="range" value={this.state.height}
            </p>
        </div>
    }
}
export default BMI
