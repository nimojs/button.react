var React = require('react')
var Button = require('button.react')
var { ButtonGroup } = Button
class Group extends React.Component {
    render () {
        return (
            <div>
                <ButtonGroup>
                    <Button>A</Button>
                    <Button>B</Button>
                    <Button>C</Button>
                </ButtonGroup> 默认
                <hr />
                <ButtonGroup>
                    <Button type="primary" >A</Button>
                    <Button type="primary" >B</Button>
                    <Button type="primary" >C</Button>
                </ButtonGroup> 主要
                <hr />
                <ButtonGroup>
                    <Button icon >&times;</Button>
                    <Button icon >&copy;</Button>
                    <Button icon >&cent;</Button>
                </ButtonGroup> icon
                <hr />
                <ButtonGroup>
                    <Button>A</Button>
                    <Button>B</Button>
                    <Button type="disabled" >C</Button>
                </ButtonGroup> disabled
                <hr />
                <ButtonGroup>
                    <Button ghost type="primary">A</Button>
                    <Button ghost type="primary">B</Button>
                    <Button ghost type="primary">C</Button>
                </ButtonGroup> ghost
                <hr />
                <ButtonGroup>
                    <Button dashed >A</Button>
                    <Button dashed >B</Button>
                    <Button dashed>C</Button>
                </ButtonGroup> dashed
            </div>
        )
    }
}
/*ONFACE-DEL*/Group = require("react-hot-loader").hot(module)(Group)
module.exports = Group
