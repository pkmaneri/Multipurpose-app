import React, { Component } from "react"
import Bmi from "./Bmi"

class Multiple extends Component {
    state = {
        result: '',
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            num1: nextProps.x,
            num2: nextProps.x,
            num3: nextProps.y,
            num4: nextProps.y,
        }, () => {
            this.handleClick()

        })
        console.log(nextProps)
    }

    handleonchangeNum1(e) {
        const num1 = e.target.value
        this.setState(prevState => {
            return {
                num1: num1,
                num2: prevState.num2,
                num3: prevState.num3,
                num4: prevState.num4
            }
        })

    }
    handleonchangeNum2(e) {
        const num2 = e.target.value
        this.setState(prevState => {
            return {
                num2: num2,
                num1: prevState.num1,
                num3: prevState.num3,
                num4: prevState.num4
            }
        })


    }
    handleonchangeNum3(e) {
        const num3 = e.target.value
        this.setState(prevState => {
            return {
                num3: num3,
                num2: prevState.num2,
                num1: prevState.num1,
                num4: prevState.num4
            }
        })


    }
    handleonchangeNum4(e) {
        const num4 = e.target.value
        this.setState(prevState => {
            return {
                num4: num4,
                num2: prevState.num2,
                num3: prevState.num3,
                num1: prevState.num1
            }
        })
    }
    handleClick() {
        const num1 = this.state.num1;
        const num2 = this.state.num2;
        const num3 = this.state.num3;
        const num4 = this.state.num4;
        const result = parseInt(num1) * parseInt(num2) * parseInt(num3) * parseInt(num4);
        this.setState({
            'result': result
        })
    }
    render() {
        return (
            <>
                <div className="row">
                    <div className="col bprderClass">
                        <input aria-label="num1-input" type="text" onChange={this.handleonchangeNum1.bind(this)} value={this.state.num1}></input>
                        <input aria-label="num2-input" type="text" onChange={this.handleonchangeNum2.bind(this)} value={this.state.num2}></input>
                        <input aria-label="num3-input" type="text" onChange={this.handleonchangeNum3.bind(this)} value={this.state.num3}></input>
                        <input aria-label="num4-input" type="text" onChange={this.handleonchangeNum4.bind(this)} value={this.state.num4}></input>
                        <button aria-label="multiple-button" onClick={this.handleClick.bind(this)}>Multiple</button>
                        <b aria-label="multiple-output">{this.state.result}</b>
                    </div>
                </div>
                <div className="row">
                    <div className="bmi">
                        <Bmi p={this.state.num1} r={this.state.num3} />
                    </div>
                </div>
            </>
        )
    }
}
export default Multiple