const MyMessage = ({ message }) => {
  if (message.attachments && message.attachments.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="message-attachment"
        className="message-image"
        style={{
          float: "right",
          color: "#e7ecef",
          backgroundColor: "#6096ba",
        }}
      />
    );
  }

  return (
    <div
      className="message"
      style={{
        float: "right",
        marginRight: "18px",
        color: "#e7ecef",
        backgroundColor: "#6096ba",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
