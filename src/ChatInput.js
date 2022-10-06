import React, { useState } from "react";
import "./ChatInput.css";
import { useDataLayerValue } from "./DataLayer";
import db from "./firebase";
import { serverTimestamp } from "@firebase/firestore";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{ user }] = useDataLayerValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if (!input) return false;

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("");
  };
  return (
    <div className="chatInput">
      <form>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`Message #${channelName}`}
        />
        <button type="submit" onClick={sendMessage}>
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
