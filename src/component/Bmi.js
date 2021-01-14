import React, { Component } from "react"

class Bmi extends Component {
    state = {
        mass: 0,
        height: 0,
        result: ""
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            mass: nextProps.p,
            height:nextProps.r,
        }, () => {
            this.handleBmi()

        })
        console.log(nextProps)
    }

    handleMass(e) {
        const mass = (e.target.value)
        this.setState(prevState => {
            return {
                mass: mass,
                height: prevState.height,
            }
        })
    }
    handleHeight(e) {
        const height = (e.target.value)
        this.setState(prevState => {
            return {
                height: height,
                mass: prevState.mass,
            }
        })
    }
    handleBmi(event) {
        const mass = this.state.mass;
        const height = this.state.height;
        const result = parseInt(mass) / parseInt(height * height);
        this.setState({
            'result': result
        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col bprderClass">
                        <input aria-label="mass-input" text="text" onChange={this.handleMass.bind(this)} value={this.state.mass}></input>
                        <input aria-label="height-input" text="text" onChange={this.handleHeight.bind(this)} value={this.state.height}></input>
                        <button aria-label="bmi-button" onClick={this.handleBmi.bind(this)}>bmi</button>
                        <b aria-label="bmi-output" >{this.state.result}</b>
                    </div>
                </div>
            </>
        )
    }
}
export default Bmi