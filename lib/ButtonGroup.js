import React , { Component } from "react"
import extend from "extend"
import getProps from "./getProps"
class ButtonGroup extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {

        }
    }
    render() {
        const self = this
        var cloneProps = getProps(self.props)

        return (
            <div
                {...cloneProps}
            >
                {self.props.children}
            </div>

        )
    }
}
export default ButtonGroup
require('./ButtonGroupProps').default(ButtonGroup)
