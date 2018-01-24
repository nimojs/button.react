var React = require('react')
var Button = require('button.react')
class Loading extends React.Component {
    render () {
        return (
            <div>
                <Button loading={true} >default</Button>
                {' '}
                <Button loading={true} type="primary" >primary</Button>
                {' '}
                <Button loading={true} type="danger" >danger</Button>
                {' '}
                <Button loading={true} type="info" >info</Button>
                {' '}
                <Button loading={true} type="warning" >warning</Button>
                {' '}
                <Button loading={true} type="success" >success</Button>
                {' '}
                <Button loading={true} type="disabled" >diasbled</Button>
            </div>
        )
    }
}
/*ONFACE-DEL*/Loading = require("react-hot-loader").hot(module)(Loading)
module.exports = Loading
