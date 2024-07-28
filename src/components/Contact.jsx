import React, { forwardRef, useState } from "react";
import styles from "./Contact.module.css";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  TextField,
} from "@mui/material";

const Contact = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const phoneNumber = "9074925424";
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    const encodedMessage = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };
  const handleSubmitEmail = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill all fields");
      return;
    }
    const toEmail = "nanduaji64@gmail.com";
    const subject = encodeURIComponent("Contact Message");
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    const mailtoURL = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    window.open(mailtoURL, "_self");
  };
  return (
    <div ref={ref}>
      <h1 className={styles.heading}>Contact Me</h1>
      <div className={styles.innerdiv}>
        <Card
          sx={{
            maxWidth: 1000,
            margin: "0 auto",
            width: 500,
            marginBottom: "20px",
            backgroundColor: "#1f292f",
            color: "#acb1b2",
            "@media (max-width: 768px)": {
              maxWidth: "95%",
            },
          }}
        >
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="#acb1b2">
              Feel free to reach out to me through the following channels:
            </Typography>
            <Typography variant="body2" paragraph>
              <strong>Email:</strong> nanduaji64@gmail.com
              <br />
              <strong>Phone:</strong> 9074925424,9497429753
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a
                href="http://www.linkedin.com/in/nandu-aji-bb2369207"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: "none",
                  color: "#00A0DC",
                  backgroundColor: "#1f282d",
                  padding: "5px 10px",
                  borderRadius: "5px",
                  fontWeight: "bold",
                }}
              >
                http://www.linkedin.com/in/nandu-aji-bb2369207
              </a>
            </Typography>
          </CardContent>
        </Card>
        <Card
          sx={{
            maxWidth: 1000,
            margin: "0 auto",
            width: 500,
            "@media (max-width: 768px)": {
              maxWidth: "95%",
            },
          }}
        >
          <CardContent>
            <Typography variant="h5" component="div">
              Send Me a Message
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              I'd love to hear from you. Please fill out the form below:
            </Typography>
            <form>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                fullWidth
                label="Email"
                type="email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                variant="outlined"
                margin="normal"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
                onClick={handleSubmit}
              >
                Send Whatsapp
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2, ml: 2 }}
                onClick={handleSubmitEmail}
              >
                Send Email
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
});

export default Contact;
