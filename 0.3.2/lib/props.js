import p from 'prop-types'
export default function (app) {
    app.defaultProps = {
        prefixClassName: 'face-btn',
        themes: '',
        type: '',
        loading: false,
        diasbled: undefined,
        ghost: false,
        htmlType: 'button',
        dashed: false,
        onClick: function(){},
    }
    app.propTypes = {
        prefixClassName: p.string,
        themes: p.string,
        loading:p.bool,
        diasbled:p.bool,
        ghost: p.bool,
        dashed: p.bool,
        type: p.string,
        htmlType: p.string,
        onClick: p.func,
    }
}
