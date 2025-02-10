import React, { useState } from 'react'

export default function Countries() {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);


    const loadCountries = () => {
        setLoading(true);
        fetch("https://restcountries.com/v3.1/all")
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    };
    return (
        <div>
            <div className='page-container'>
                <h1>All Countries Data</h1>

            </div>
            <button className="btn btn-primary" onClick={loadCountries}>
                Load Countries
            </button>

            <div className="container mt-4">
                <h2 className="text-center mb-4">Country List</h2>
                {loading ? (
                    <div className="text-center">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div className="row">
                        {countries.map((country, index) => (
                            <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 mb-4">
                                <div className="card">
                                    <img src={country.flags.png} className="card-img-top" alt={country.name.official} />
                                    <div className="card-body">
                                        <h5 className="card-title">{country.name.official}</h5>
                                        <p className="card-text">
                                            <strong>Region:</strong> {country.region}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>

    )
}
