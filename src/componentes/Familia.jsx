import React from 'react'
import { filhosComProps } from '../utils/utils'

export default props => (
    <div>
        <h1>Família</h1>

        {filhosComProps(props)}

        {/* React.Children.map(props.children, child => {
            return React.cloneElement(child, { ...props })
        }) */}
        {/* props.children */}
    </div>
)