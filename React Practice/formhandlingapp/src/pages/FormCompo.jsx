import React from 'react'

export default function FormCompo({ formData, handleChange, btnSubmit }) {
    return (
        <div>
            <form onSubmit={btnSubmit}>
                <input type='text' name='name' onChange={handleChange} value={formData.name} placeholder='Name' /><br /><br />
                <input type='email' onChange={handleChange} value={formData.email} name='email' placeholder='Email' /><br /><br />
                <input type='city' name='city' onChange={handleChange} value={formData.city} placeholder='City' /><br /><br />
                <input type='submit' />
            </form>
        </div>
    )
}
