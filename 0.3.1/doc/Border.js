var React = require('react')
var Button = require('button.react')
class Border extends React.Component {
    render () {
        return (
            <div>
                <Button ghost >ghost</Button>
                {' '}
                <Button dashed >dashed</Button>
                {' '}
                <Button ghost dashed >ghost dashed</Button>
                {' '}
            </div>
        )
    }
}
/*ONFACE-DEL*/Border = require("react-hot-loader").hot(module)(Border)
module.exports = Border
