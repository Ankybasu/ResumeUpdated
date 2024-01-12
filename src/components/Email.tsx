import React, { useRef, useState } from "react";
import SideBar from "./SideBar";
import styles from "../customstyle.module.css";
import emailjs from "@emailjs/browser";

const Email = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    text: "",
  });
  const updateForm = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    console.log(e.target);
    console.log(form);
  };
  const sendEmail = (e: any) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs
      .sendForm(
        "service_nj8g8ta",
        "template_sjkiglj",
        e.target,
        "Q0kUd1jkgTf7RjY3t"
      )
      .then(
        (result) => {
          console.log(result);
          // show the user a success message
        },
        (error) => {
          console.log(error);
          // show the user an error
        }
      );
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundImage: "linear-gradient(90deg, #64b68757, transparent)",
        }}
      >
        <SideBar></SideBar>
        <div className="col-lg-9" style={{ margin: "40px", padding: "40px" }}>
          <div className={styles.contact}>
            <h1>Contact</h1>
            <p>
              Interested in hiring me for your project or just want to say hi?
              You can fill in the contact form below or send me an email to
              ankitabasu0608@gmail.com Want to get connected? Follow me on the
              social channels below.
            </p>
          </div>
          <div className={styles.emailForm}>
            <form onSubmit={sendEmail}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "column",
                }}
              >
                <div>
                  <div>
                    {/* <label>Name</label> */}
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      placeholder="Name"
                      onChange={updateForm}
                    ></input>
                  </div>
                  <div>
                    {/* <label>Email</label> */}
                    <input
                      type="text"
                      name="email"
                      value={form.email}
                      onChange={updateForm}
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div>
                  {/* <label>Message</label> */}

                  <textarea
                    placeholder="type a message..."
                    name="text"
                    value={form.text}
                    style={{ width: "100%" }}
                    onChange={updateForm}
                  ></textarea>
                </div>
                <div>
                  <button className="btn btn-success">Send Now</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Email;
