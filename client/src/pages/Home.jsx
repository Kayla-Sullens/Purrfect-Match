const Home = () => {
  return (
    <main>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <a href="">
                <img src="" alt="" />
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
                  <button>Sign In</button>
                  <span>|</span>
                  <button>Sign Up</button>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>




      <div className="container my-2">
        <p>
          This template can be used as a starting point to build a full-stack
          application with the MERN stack.
        </p>
        <ul>
          <li>M - MongoDB</li>
          <li>E - Express (w/ GraphQL)</li>
          <li>R - React</li>
          <li>N - Node</li>
        </ul>
      </div>
    </main>

  );
};

export default Home;
