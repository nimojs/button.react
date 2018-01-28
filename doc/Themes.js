var React = require('react')
var Button = require('button.react')
class ButtonNight extends React.Component {
    render () {
        let themes = this.props.themes
        // 二次封装 night
        themes = themes + ' night'
        return (
            <Button {...this.props} themes={themes} />
        )
    }
}
class ButtonNightLink extends React.Component {
    render () {
        let themes = this.props.themes
        // 三次封装 light
        themes = themes + ' link'
        return (
            <ButtonNight {...this.props} themes={themes} />
        )
    }
}
class Themes extends React.Component {
    render () {
        const self = this
        return (
            <div>
                <ButtonNight size="small" >small</ButtonNight>
                {' '}
                <ButtonNight size="large" >large</ButtonNight>
                <hr />
                <ButtonNightLink size="small" >small</ButtonNightLink>
                {' '}
                <ButtonNightLink size="large" >large</ButtonNightLink>
            </div>
        )
    }
}
/*ONFACE-DEL*/Themes = require("react-hot-loader").hot(module)(Themes)
module.exports = Themes
