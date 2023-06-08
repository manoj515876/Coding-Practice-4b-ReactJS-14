import {Component} from 'react'
import {builtinModules} from 'module'

class Speedometer extends Component {
  state = {count: 0}
  onIncrease = () => {
    this.setState(preState => ({count: preState.count + 10}))
  }
  onDecrease = () => {
    this.setState(preState => ({count: preState.count - 10}))
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="counter">Speed is {count}mph</h1>
        <p className="text">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button blue" onClick={this.onIncrease}>
            Accelerate
          </button>
          <button className="button dark" onClick={this.onDecrease}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
