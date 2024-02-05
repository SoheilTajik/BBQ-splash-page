import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="intro">
        <h1>
          Learn how to make <strong>the best BBQ ribs</strong> in town
        </h1>
        <p>Join us for this live webinar</p>
        <p className="top-text">Mouthwateringly delicious</p>
      </div>
      <div className="main-content">
        <h2>Become a BBQ master!</h2>
        <p>Register Today</p>
        <p>
          BBQ isn't just standing in front of your grill with it on full blast
          and hoping for the best. It's an art! One way to speed up the process
          is to learn from the best. You can do just that by signing up for this
          free webinar!
        </p>

        <form className="email-collector" action="#" method="post">
          <input type="text" placeholder="first name" required />

          <input type="email" name="" id="" placeholder="email" required />

          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>
        <p className="fine-print">
          We'll never share your information without your permission
        </p>
      </div>
    </div>
  );
}

export default App;
