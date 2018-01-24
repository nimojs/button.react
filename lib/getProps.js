import util from "util.react"
import extend from "extend"
export default function getProps (props, state) {
    var rootClassName = [
        props.prefixClassName,
        util.themes(props),
        props.prefixClassName,
        props.icon? `${props.prefixClassName}--icon`:'',
        props.loading? `${props.prefixClassName}--loading`:'',
        props.loading? `${props.prefixClassName}--loading`:'',
        props.type? `${props.prefixClassName}--${props.type}`:'',
        props.dashed? `${props.prefixClassName}--dashed`:'',
        props.ghost? `${props.prefixClassName}--ghost`:'',
    ]
    if (typeof state !== 'undefined') {
        rootClassName.push(
            state.shadow? `${props.prefixClassName}--clicked`:'',
        )
    }
    rootClassName = rootClassName.join(' ')
    var cloneProps = extend(true, {}, props)
    delete cloneProps.prefixClassName
    delete cloneProps.loading
    delete cloneProps.dashed
    delete cloneProps.ghost
    delete cloneProps.disabled
    cloneProps.className = rootClassName
    return cloneProps
}
