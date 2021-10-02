import React from 'react'

function Alert(props) {

    const capitaized = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }

    return (
        <div style={{ height: "50px" }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitaized(props.alert.type)}</strong>: <strong>{props.alert.msg}</strong>
            </div>}
        </div>
    )
}

export default Alert
