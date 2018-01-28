var React = require('react')
var Button = require('button.react')
class Style extends React.Component {
    render () {
        return (
            <div>
                <Button>default</Button>
                {' '}
                <Button type="primary" >primary</Button>
                {' '}
                <Button type="danger" >danger</Button>
                {' '}
                <Button type="info" >info</Button>
                {' '}
                <Button type="warning" >warning</Button>
                {' '}
                <Button type="success" >success</Button>
                {' '}
                <Button type="link" href="#" >link</Button>
                {' '}
                <Button type="disabled" >diasbled</Button>
                <hr />
                <form action="">
                    <input type="text" name="name" defaultValue="nimo" />
                    <br />
                    <Button type="primary" htmlType="submit" >Submit</Button>
                    <Button htmlType="reset" >Reset</Button>
                </form>
            </div>
        )
    }
}
/*ONFACE-DEL*/Style = require("react-hot-loader").hot(module)(Style)
module.exports = Style
