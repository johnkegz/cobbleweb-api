import { useState, useEffect } from "react";

type Message = {
  messageToShow: {
    type: string;
    message: string;
  };
};

const Notification = ({ messageToShow }: Message) => {
  const [show, setShow] = useState(false);
  const { message, type } = messageToShow;
  useEffect(() => {
    if (message) {
      setShow(true);
      const timeout = setTimeout(() => {
        setShow(false);
      }, 4000);

      return () => clearTimeout(timeout);
    }
  }, [message]);

  return (
    <div
      className={`notification ${
        type === "success" ? "success-notification" : "error-notification"
      } success-notification ${show ? "show" : ""}`}
    >
      {message}
    </div>
  );
};

export default Notification;
