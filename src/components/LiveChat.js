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
      <div className="border border-gray-500 h-[500px] w-[400px] ml5 overflow-y-scroll flex flex-col-reverse rounded-t-md">
        {data.map((c, index) => (
          <ChatBox name={c.name} message={c.message} key={index} />
        ))}
      </div>
      <div className="border border-gray-500 w-[400px] py-2 rounded-b-md p-2 grid grid-flow-col col-span-12">
        <input
          placeholder="Chat...."
          value={doChat}
          onChange={(e) => setDoChat(e.target.value)}
          className=" bg-gray-2 00 rounded-2xl px-2 w-full col-span-10 placeholder:text-black  "
        />
        <button
          className="col-span-2"
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
    </div>
  );
};

export default LiveChat;
