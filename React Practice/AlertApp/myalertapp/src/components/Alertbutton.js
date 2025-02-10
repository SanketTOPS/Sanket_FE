import React from 'react'

export default function Alertbutton() {
    return (
        <div className='button-container'>
            <button onClick={() => showAlert()} type="button" class="btn btn-outline-primary">Confirmation</button>
            <button onClick={() => showAlert()} type="button" class="btn btn-outline-warning">Warning</button>
            <button onClick={() => showAlert()} type="button" class="btn btn-outline-success">Success</button>
            <button onClick={() => showAlert()} type="button" class="btn btn-outline-danger">Error</button>
        </div>
    )
}
