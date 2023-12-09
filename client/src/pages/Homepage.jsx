// import React from "react";

export const Homepage = () => {
    return (
        <main className="homepage">
            <header className="main_header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <a href="">
                                <img src="./src/assets/logo.png" alt="" />
                            </a>
                        </div>
                        <div className="col-md-8">
                            <div className="head_nav">
                                <ul>
                                    <li><a href="">Home</a></li>
                                    <li><a href="">Cat All</a></li>
                                    <li><a href="">Cat One</a></li>
                                </ul>
                                <div className="user_info">
                                    <a href="/login">Sign In</a>
                                    <span>|</span>
                                    <a href="/signup">Sign Up</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <setion className="section_hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Perfect Match</h3>
                            <p>Our mission is to help find each of our cats their Purrfect family, one match at a time.</p>
                            <button>Our Mission</button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </setion>


            <div className="container ">

                <div className="heading">
                    <h1>Welcome to Purrfect Match!</h1>
                </div>
                <div className="container about-container">
                    <div className="image-container">
                        <div className="image">
                            <img src="" className="" alt="" />
                        </div>
                    </div>
                    <div className="container about-content">
                        <div className="mission">
                            <p>Our mission is to help find each of our cats their Purrfect family, one match at a time.</p>
                        </div>
                        <div className="about-text">
                            <p>Here at Purrfect Match, we are passionate about helping our community stay up-to-date with cat care tips, as well as available cats. We believe that every home has room for a cat, or a few, and we are here to help you find exactly what you are looking for! You can search the various cats we have available for adoption, as well as engage in comments regarding a specific cat.</p>
                        </div>
                        <div className="about-signup-reminder">
                            <p>
                                Don't forget to Sign-In or Sign-Up to be able to see our available cats ready to steal your heart!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-cat-tips">
                    <div className="cat-tips-heading">
                        <h2>Tips for finding your Purrfect Match:</h2>
                    </div>
                    <div className="cat-tips-list">
                        <ol>
                            <li>Decide whether you want a kitten or an adult cat.</li>
                            <li>Finding the right personality is key.</li>
                            <li>How much fur can you handle? Different breeds have different fur and shedding habits, so keep this in mine.</li>
                            <li>Consider your lifestyle. While most cats don't need as much attention and care as other pets, they do still need daily care.</li>
                            <li>Research and rely on experts! If you have questions, ask someone who knows more about cats and can help you.</li>
                        </ol>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Homepage;
