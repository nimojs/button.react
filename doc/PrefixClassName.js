var React = require('react')
var Button = require('button.react')
class MyButton extends React.Component {
    render () {
        return (
            <Button prefixClassName="my-btn" {...this.props} />
        )
    }
}
class PrefixClassName extends React.Component {
    render () {
        const self = this
        return (
            <div>
                <MyButton size="small" >small</MyButton>
            </div>
        )
    }
}
/*ONFACE-DEL*/PrefixClassName = require("react-hot-loader").hot(module)(PrefixClassName)
module.exports = PrefixClassName
