import react, { useState, useEffect } from 'react'
import "./viewport-fadein.scss"

const ViewportFadeIn = ({children, offset, direction}) => {
    const [showing, setShowing] = useState(false)

    const element = react.createRef()

    const inViewport = (element) => {
        if (!element || !element.current) return false

        const bounds = element.current.getBoundingClientRect()
        const windowBottom = window.innerHeight
        
        return (bounds.top + offset >= 0 && bounds.top - offset <= windowBottom)
    }

    const onScroll = () => {
        const shouldShow = inViewport(element)
        if (showing === shouldShow) return
        else setShowing(shouldShow)    
    }

    if (!showing) window.addEventListener('scroll', () => onScroll())

    useEffect(() => {
        onScroll()
    }, [])

    return (
        <div ref={element} className={["wrapper", showing ? null : direction || "to-left"].join(' ')}>
            {children}
        </div>
    )
}

export default ViewportFadeIn