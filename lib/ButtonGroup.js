import React , { Component } from "react"
import util from "util.react"
import extend from "extend"
class ButtonGroup extends Component {
    constructor (props) {
        super(props)
        const self = this
        self.state = {

        }
    }
    render() {
        const self = this
        const props = self.props
        let rootClassName = [
            props.prefixClassName,
            util.themes(props)
        ].join(' ')
        return (
            <div
                className={rootClassName}
            >
                {self.props.children}
            </div>

        )
    }
}
export default ButtonGroup
require('./ButtonGroupProps').default(ButtonGroup)
