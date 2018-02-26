var React = require('react')
var Button = require('button.react')
class ButtonLoose extends React.Component {
    render () {
        let themes = this.props.themes
        // 二次封装 night
        themes = themes + ' loose'
        return (
            <Button {...this.props} themes={themes} />
        )
    }
}
class ButtonLooseImport extends React.Component {
    render () {
        let themes = this.props.themes
        // 三次封装 light
        themes = themes + ' import'
        return (
            <ButtonLoose {...this.props} themes={themes} />
        )
    }
}
class Themes extends React.Component {
    render () {
        const self = this
        return (
            <div>
                <ButtonLoose size="large" >large</ButtonLoose>
                <hr />
                <ButtonLooseImport size="large" >large</ButtonLooseImport>
            </div>
        )
    }
}
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)
module.exports = Themes
