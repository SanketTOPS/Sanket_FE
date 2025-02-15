import React from 'react'
import './styles/';

export default function Profilepg() {
    return (
        <div>
            <div className="card">
                <div className="img">
                    <img src="https://images.unsplash.com/photo-1610216705422-caa3fcb6d158?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGZhY2V8ZW58MHwyfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                </div>
                <div className="infos">
                    <div className="name">
                        <h2>Sanket Chauhan</h2>
                        <h4>@sanketios</h4>
                    </div>
                    <p className="text">
                        I'm a Front End Developer, follow me to be the first
                        who see my new work.
                    </p>
                    <ul className="stats">
                        <li>
                            <h3>15K</h3>
                            <h4>Views</h4>
                        </li>
                        <li>
                            <h3>82</h3>
                            <h4>Projects</h4>
                        </li>
                        <li>
                            <h3>1.3M</h3>
                            <h4>Followers</h4>
                        </li>
                    </ul>
                    <div className="links">
                        <button className="follow">Follow</button>
                        <button className="view">View profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
