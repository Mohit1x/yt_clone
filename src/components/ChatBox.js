import React from "react";

const ChatBox = ({ name, message }) => {
  return (
    <div className="flex items-center p-2">
      <img
        className="w-10 col-span-1"
        src="https://w7.pngwing.com/pngs/915/108/png-transparent-illustrator-email-flat-avatar-trademark-logo-illustrator.png"
        alt="avatar"
      />
      <h1 className="font-bold">{name}</h1>
      <h1 className="m-2">{message}</h1>
    </div>
  );
};

export default ChatBox;
