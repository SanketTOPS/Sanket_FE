import React from 'react'

export default function Myform(btnSubmit, handleChange, formData) {
    return (
        <div>
            <form onSubmit={btnSubmit}>
                <input type='text' name='name' onChange={handleChange} placeholder='Name' value={formData.name} /><br /><br />

                <input type='text' name='email' value={formData.email} onChange={handleChange} placeholder='Email' /><br /><br />

                <input type='text' name='city' value={formData.city} onChange={handleChange} placeholder='City' /><br /><br />

                <input type='submit' />
            </form>
        </div>
    )
}
