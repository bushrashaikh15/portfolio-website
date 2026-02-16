function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <p>Email: shaikh.bushra1510@gmail.com</p>
      <p>LinkedIn: linkedin.com/in/bushra</p>

      <form>
        <input type="text" placeholder="Your Name" required /><br></br>
        <input type="email" placeholder="Your Email" required /><br></br>
        <textarea placeholder="Message"></textarea><br></br>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
