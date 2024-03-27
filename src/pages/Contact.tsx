import "../App.scss";
import NavigationBar from "../Components/NavigationBar";
import Footer from "../Components/Footer";
import React from "react";
import { motion } from "framer-motion";


function Contact() {
  const [formStatus, setFormStatus] = React.useState("Send");
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("Submitting...");
    const form = e.currentTarget;
    const name = form.elements.namedItem("name") as HTMLInputElement;
    const email = form.elements.namedItem("email") as HTMLInputElement;
    const message = form.elements.namedItem("message") as HTMLInputElement;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };

  const routeVariants = {
    initial: {
        y: '100vh'
    },
    final: {
        y: '0vh'
    }
  }
  

  return (
    <> 
      <div id="start" className="bg-photo">
        <NavigationBar></NavigationBar>
        <motion.div 
        className="ContactForm d-flex align-items-center justify-content-center flex-column mx-2"
        variants={routeVariants}
        initial="initial"
        animate="final"
        >
          <h2 className="space-5 gold">Contact Me</h2>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label className="form-label" htmlFor="name">
                Name
              </label>
              <input className="form-control gold" type="text" placeholder="Enter your name" id="name" required />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-control gold"
                type="email"
                id="email"
                placeholder="Enter your e-mail"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="message">
                Message
              </label>
              <textarea className="form-control gold" placeholder="I'm interested in working with you..." id="message" required />
            </div>
            <button className="btn btn-danger" type="submit">
              {formStatus}
            </button>
          </form>
        </motion.div>
          <Footer></Footer>
      </div>
    </>
  );
}

export default Contact;
