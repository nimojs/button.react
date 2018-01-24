import { Component } from "react"
import extend from "extend"
import util from "util.react"
import getProps from "./getProps"
require('./index.css')
class Button extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {
            shadow: false
        }
        self.shadowTimer = false
    }
    static ButtonGroup = require('./ButtonGroup').default
    proxyClick = (e) => {
        const self = this
        self.props.onClick(e)
        if (self.state.show) {
            clearTimerout(self.shadowTimer)
        }
        self.setState({
            shadow: true
        })
        self.shadowTimer = setTimeout(function () {
            self.setState({
                shadow: false
            })
        }, 400)
    }
    render() {
        const self = this
        let cloneProps = getProps(self.props)
        return (
            <span
                ref="root"
                {...cloneProps}
                onClick={self.proxyClick}
                disabled={self.props.type === 'disabled'}
            >
            {self.props.children}
            </span>
        )
    }
}
require('./props').default(Button)
export default Button
module.exports= Button
