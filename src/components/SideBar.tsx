import React from "react";
import styles from "../customstyle.module.css";
import Image from "../images/dp.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { Link } from "react-router-dom";
import Email from "./Email";
const SideBar = () => {
  const email = "ankitabasu0608@gmail.com";
  const subject = "hi";
  const body = "hl world";
  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#64B687",
        color: "white",
        height: "100vh",
        width: "20%",
      }}
    >
      <div style={{ margin: "0.5rem", padding: "1rem" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{ fontSize: "1rem", alignSelf: "center" }}>
            Software Developer
          </h2>
          <img
            src={Image}
            style={{
              height: "auto",
              width: "80%",
              alignSelf: "center",
              margin: "10%",
              border: "3px solid",
              borderRadius: "50%",
            }}
          />
          <div className={styles.links}>
            <a
              rel="noopener noreferrer"
              href="https://github.com/Ankybasu"
              target="_blank"
            >
              <FaGithub style={{ color: "black" }} />
            </a>
            <a
              rel="noopener noreferrer"
              href="https://linkedin.com/in/ankita-basu-74a4701b6"
            >
              <FaLinkedin style={{ color: "#0a66c2" }}></FaLinkedin>
            </a>
            <Link to="/mail">
              <AiTwotoneMail style={{ color: "black" }}></AiTwotoneMail>
            </Link>
          </div>
          <p style={{ fontSize: "0.75rem" }}>
            Hi,I am Ankita Basu and I'm a senior software engineer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
