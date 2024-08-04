// src/components/Chatbot.jsx
import React, { useState } from "react";
import styles from "./Chatbot.module.css";
import { Tooltip } from "@mui/material";

const predefinedQuestions = [
  "Can you provide an overview of your skills and expertise?",
  "What projects are you most proud of?",
  "Can you explain your experience with React and other technologies?",
  "What kind of work environment do you thrive in?",
  "What are your career goals and aspirations?",
  "How can I contact you?",
  "What is your availability for new projects?",
  "Do you have any recommendations for learning resources?",
  "Can you tell me more about your work history?",
  "What is your preferred method of communication?",
];

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user message
    setMessages([...messages, { text: input, type: "user" }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages([
        ...messages,
        { text: input, type: "user" },
        { text: botResponse, type: "bot" },
      ]);
    }, 1000);
  };

  const handlePredefinedQuestion = (question) => {
    setInput(question);
    handleSendMessage();
  };

  const getBotResponse = (userInput) => {
    // Simple bot response logic
    if (userInput.toLowerCase().includes("skills"))
      return "I am skilled in React, Node.js, and various other technologies.";
    if (userInput.toLowerCase().includes("projects"))
      return "I am most proud of my portfolio website and my contributions to various open-source projects.";
    if (userInput.toLowerCase().includes("react"))
      return "I have extensive experience with React, including building responsive applications and managing state effectively.";
    if (userInput.toLowerCase().includes("environment"))
      return "I thrive in collaborative and innovative environments where I can continuously learn and grow.";
    if (userInput.toLowerCase().includes("problem-solving"))
      return "I approach problem-solving with a methodical mindset, breaking down issues and finding effective solutions.";
    if (userInput.toLowerCase().includes("goals"))
      return "My career goals include becoming a lead developer and contributing to impactful projects.";
    if (userInput.toLowerCase().includes("trends"))
      return "I stay current with industry trends by following blogs, attending webinars, and experimenting with new technologies.";
    if (userInput.toLowerCase().includes("challenging project"))
      return "One challenging project I worked on involved integrating a complex API with a React application, which required extensive debugging and optimization.";
    if (userInput.toLowerCase().includes("contact"))
      return "You can contact me through the contact form on my portfolio website.";
    if (userInput.toLowerCase().includes("availability"))
      return "I am currently available for new projects. Feel free to reach out!";
    if (userInput.toLowerCase().includes("learning resources"))
      return "I recommend checking out online courses on platforms like Coursera and Udemy, and reading blogs on Medium.";
    if (userInput.toLowerCase().includes("work history"))
      return "I have worked in various roles, including front-end developer, back-end developer, and full-stack developer.";
    if (userInput.toLowerCase().includes("communication"))
      return "I prefer communication through whatsapp,email or contact form on my portfolio website.";
    return "Sorry, I don't understand.";
  };

  const toggleChatbox1 = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <div className={styles.chatbot}>
      {isChatOpen ? (
        <div className={styles.chatbox}>
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.type === "bot" ? styles.bot : styles.user
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.predefinedQuestions}>
            {predefinedQuestions.map((question, index) => (
              <button
                key={index}
                className={styles.predefinedButton}
                onClick={() => handlePredefinedQuestion(question)}
              >
                {question}
              </button>
            ))}
          </div>
          <div className={styles.inputContainer}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              placeholder="Type a message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
          <button className={styles.closeButton} onClick={toggleChatbox1}>
            &times;
          </button>
        </div>
      ) : (
        <Tooltip title="Talk To Me">
          <div className={styles.avatar} onClick={toggleChatbox1}>
            <img src="avatar.jpg" alt="Chatbot Avatar" />
          </div>
        </Tooltip>
      )}
    </div>
  );
};

export default Chatbot;
