var React = require('react')
var Button = require('button.react')
class Icon extends React.Component {
    render () {
        return (
            <div>
            <Button icon >&times;</Button>
            {' '}
            <Button icon type="primary" >&copy;</Button>
            {' '}
            <Button icon type="danger" >&cent;</Button>
            {' '}
            <Button prepend={(<span>&copy;</span>)}>
                prepend
            </Button>
            {' '}
            <Button append={(<span>&cent;</span>)}>
                append
            </Button>
            </div>
        )
    }
}
/*ONFACE-DEL*/Icon = require("react-hot-loader").hot(module)(Icon)
module.exports = Icon
