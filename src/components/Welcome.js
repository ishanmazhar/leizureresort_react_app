import React from 'react';

function Welcome() {
    return (
        <div>
            <div>
                <img src="/assets/images/royal-tulip.jpg" alt="Leizure Beach Resort" className="cover-image"/> 
            </div>
            <div className="container">
                <div className="row welcome">
                    <div className="col-md-6 welcome-title">
                        <h1>Welcome to Leizure</h1>
                        <h3>Unwind The Pearl of Luxury</h3>
                    </div>
                    <div className="col-md-6 justify">
                        <p>
                            Leizure Beach Resort & Spa is located on Inani beach, 
                            Cox's Bazar with lush green hills rise from the east and endless sea 
                            stretching on the west, the resort offers panoramic visuals of Bay of 
                            Bengal. Nestled in the heart of nature along the world’s longest natural 
                            sandy beach, the resort is spread over 15 acres, located 40 minutes away 
                            from the hustle of the Cox's Bazar city with easy accessibility to all 
                            the major tourist. 
                        </p>
                        <p>
                            Apart from luxurious rooms & suites and two swimming pools (one exclusively 
                            for ladies) the resort boasts of a plethora of indoor & outdoor activities 
                            for both adults and kids which include an internationally acclaimed water 
                            park, tennis & badminton courts, 3D movie hall, billiards, amphitheater, 
                            a luxurious spa and a well-appointed gym.
                        </p>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;