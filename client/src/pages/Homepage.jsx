// import React from "react";

export const Homepage = () => {
    return (
        <main className="homepage">
            <setion className="section_hero">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3>Purrfect Match</h3>
                            <p>Our mission is to help find each of our cats their Purrfect family, one match at a time.</p>
                            <button>Our Mission</button>
                        </div>
                        <div className="col-md-6"></div>
                    </div>
                </div>
            </setion>
            <section className="section_wellcome">
                <div className="container">
                    <div className="row">
                        <p>Our mission is to help find each of our cats their Purrfect family, one match at a time.</p>
                        <p>Here at Purrfect Match we are passionate about helping our community stay up-to-date with cat care tips, as well as available cats. We believe that every home has room for a cat, or a few, and we are here to help you find exactly what you are looking for! You can search the various cats we have available for adoption, as well as engage in comments regarding a specific cat.</p>
                        <p>Don't forget to Sign-In or Sign-Up to be able to see our available cats ready to steal your heart!</p>
                    </div>
                </div>
            </section>
            <section className="section_our_cat">
                <div className="container">
                    <h2>Tips for finding your Purrfect Match:</h2>
                    <p>We make the journey of cat adoption as heartwarming and straightforward as the purr of a kitten. </p>
                    <div className="row">
                        <div className="col">
                            <div className="cat_info">
                                <div className="cat_thumbn"><img src="./src/assets/blue background, black cat.png" alt="" /></div>
                                <div className="cat_content">
                                    <h5>Tip #1</h5>
                                    <p>Decide whether you want a kitten or an adult cat.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cat_info">
                                <div className="cat_thumbn"><img src="./src/assets/lady with cat.png" alt="" /></div>
                                <div className="cat_content">
                                    <h5>Tip #2</h5>
                                    <p>Finding the right personality is key.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cat_info">
                                <div className="cat_thumbn"><img src="./src/assets/little girl with cat.png" alt="" /></div>
                                <div className="cat_content">
                                    <h5>Tip #3</h5>
                                    <p>How much fur can you handle? Different breeds have different fur and shedding habits, so keep this in mine.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cat_info">
                                <div className="cat_thumbn"><img src="./src/assets/little girl with cat.png" alt="" /></div>
                                <div className="cat_content">
                                    <h5>Tip #4</h5>
                                    <p>Consider your lifestyle. While most cats don't need as much attention and care as other pets, they do still need daily care.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="cat_info">
                                <div className="cat_thumbn"><img src="./src/assets/little girl with cat.png" alt="" /></div>
                                <div className="cat_content">
                                    <h5>Tip #5</h5>
                                    <p>Research and rely on experts! If you have questions, ask someone who knows more about cats and can help you.</p>
                                    <a href="#">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <p >Copy @ 2023</p>
                    </div>
                </div>
            </footer>
        </main>
    );
};

export default Homepage;
