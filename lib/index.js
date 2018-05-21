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
        }, 500)
    }
    componentWillUnmount () {
        self.shadowTimer = false
    }
    render() {
        const self = this
        let cloneProps = getProps(self.props, self.state)
        var rootProps = {
            ref: 'root',
            onClick: self.proxyClick,
            disabled: self.props.type === 'disabled'
        }
        if (typeof self.props.href !== 'undefined') {
            delete cloneProps.diasbled
            delete rootProps.diasbled
            delete cloneProps.htmlType
            return (
                <a
                    {...cloneProps}
                    {...rootProps}
                >
                {self.props.prepend}
                {self.props.children}
                {self.props.append}
                </a>
            )
        }
        else {
            delete cloneProps.htmlType
            return (
                <button
                    {...cloneProps}
                    {...rootProps}
                    type={self.props.htmlType}
                >
                {self.props.prepend}
                {self.props.children}
                {self.props.append}
                </button>
            )
        }
    }
}
require('./props').default(Button)
export default Button
module.exports= Button
