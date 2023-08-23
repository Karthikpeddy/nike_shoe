const Signup = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>SignUp</h2>
        <form>
          <div className="input-container">
            <input
              type="text"
              placeholder="First Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Last Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-container">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-container">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-button" onClick={handleLogin}>
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};
export default Signup;
