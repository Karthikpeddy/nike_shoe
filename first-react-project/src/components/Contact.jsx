const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-heading">
        <h1 className="text-2xl font-bold text-center">Contact</h1>

        <form action="">
          <label htmlFor="name">
            Enter your name : <br /> <br />
            <input className="shadow-2xl" type="text" name="name" />
          </label>
        </form>
      </div>
    </div>
  );
};
export default Contact;
