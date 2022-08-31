import { debounce } from "lodash";
import React, { useRef, useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { auth, firebase, firestore } from "services/firebase";

import ChatMessage from "../ChatMessage";

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);
  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const debouncedHandleMouseEnter = debounce(() => setIsHovered(true), 100);

  const handlOnMouseLeave = () => {
    setIsHovered(false);
    debouncedHandleMouseEnter.cancel();
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-full border border-black border-opacity-25">
      <div className="pt-[2vh] overflow-y-scroll flex flex-col h-[90%] px-[2vh] my-0">
        {messages &&
          messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} auth={auth} />
          ))}
        <span ref={dummy} />
      </div>
      <form onSubmit={sendMessage} className="flex h-[10%] bg-slate-50">
        <input
          className="leading-normal bg-transparent w-[80%] text-2xl text-gray-800  outline-none px-5"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />
        {formValue && (
          <button
            onMouseEnter={debouncedHandleMouseEnter}
            onMouseLeave={handlOnMouseLeave}
            className={`w-[20%] text-white text-center no-underline cursor-pointer border-none px-[32px] py-[20px] ${
              isHovered ? "bg-gray-900" : ""
            }`}
            type="submit"
          >
            🕊️
          </button>
        )}
      </form>
    </div>
  );
}

export default ChatRoom;
