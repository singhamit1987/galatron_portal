import { Component, useEffect, useState } from "react"

const Loader = (Loading) => {
    return class extends Component{
        constructor() {
            super()
            this.state = {
                percent : 100
            }
        }

        changePercent = () => {
            this.setState({percent: this.state.percent - 1})
        }

        componentDidUpdate() {
            //this.changePercent()
        }

        render() {
            return <Loading value={this.state.percent} />
        }
    }
}

export default Loader;