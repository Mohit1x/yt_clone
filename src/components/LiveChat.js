import { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import { useDispatch, useSelector } from "react-redux";
import { storeChat } from "../utils/ChatSlice";
import { nameGenerate } from "../utils/Constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const [doChat, setDoChat] = useState("");
  const data = useSelector((store) => store.chat.message);
  console.log(data);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        storeChat({
          name: nameGenerate(),
          message: "its my first chat on this video 🚀",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <div>
      <div className="border border-black h-[500px] w-[400px] ml5 overflow-y-scroll flex flex-col-reverse">
        {data.map((c, index) => (
          <ChatBox name={c.name} message={c.message} key={index} />
        ))}
      </div>
      <input
        value={doChat}
        onChange={(e) => setDoChat(e.target.value)}
        className="border border-black"
      />
      <button
        onClick={() => {
          dispatch(
            storeChat({
              name: "Mohit",
              message: doChat,
            })
          );
          setDoChat("");
        }}
      >
        send
      </button>
    </div>
  );
};

export default LiveChat;
