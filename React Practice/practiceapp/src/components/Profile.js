import React from 'react'

export default function Profile() {
    return (
        <div>
            <main className="container">
                <div className="profile">
                    <img src="https://i.postimg.cc/GpJd6R8x/Profile-Pic.jpg" alt="" className="avatar" />
                    <p className="">Hello. Hola. Namaste</p>
                    <h1>I <span className="heighlight">am</span> Sanket</h1>
                    <p className="">I am a full Stack developer <br /> who loves tech.</p>
                    <div className="icons">
                        <a href=""><i className="bi bi-github"></i></a>
                        <a href=""><i className="bi bi-twitter"></i></a>
                        <a href=""><i className="bi bi-linkedin"></i></a>
                    </div>
                </div>
            </main>
        </div>
    )
}
