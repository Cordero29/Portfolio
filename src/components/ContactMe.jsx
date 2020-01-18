import React from "react";

export default function ContactMe() {
  return (
    <div id="contactMe">
      <h1>Contact Me</h1>
      <div className="form">
        <form action="https://formspree.io/mvokrwnv" method="POST">
              <input
                id="contactName"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
              <input
                id="contactEmail"
                type="text"
                name="_replyto"
                placeholder="Enter your email address"
              />
          <textarea
            id="contactMessage"
            name="message"
            placeholder="Your message here..."
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
