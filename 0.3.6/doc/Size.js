var React = require('react')
var Button = require('button.react')
class Size extends React.Component {
    render () {
        const self = this
        return (
            <div>
                <Button size="small" >small</Button>
                {' '}
                <Button>default</Button>
                {' '}
                <Button size="large">large</Button>
                <hr/>
                <Button style={{fontSize: "1.5em"}}>font-size: 1.5em</Button>
                {' '}
                <Button style={{fontSize: "2em"}}>font-size: 2em</Button>
                {' '}
                <Button size="big" >custom size</Button>
                {' '}
                <Button
                    style={{
                        fontSize: 30,
                        lineHeight: '30px',
                        padding: 10,
                        color: 'skyblue',
                        background: '#e6f7ff',
                        border: '1px solid #91d5ff',
                    }}
                >
                    custom size 2
                </Button>
            </div>
        )
    }
}
/*ONFACE-DEL*/Size = require("react-hot-loader").hot(module)(Size)
module.exports = Size
