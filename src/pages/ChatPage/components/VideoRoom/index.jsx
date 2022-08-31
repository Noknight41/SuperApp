import React, { useState } from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AiOutlineSend } from "react-icons/ai";
import { toast } from "react-toastify";

import utils from "helpers/utils";
import { auth, firestore, firebase } from "services/firebase";

function VideoRoom() {
  const [UrlValue, setUrlValue] = useState("");

  const urlRef = firestore.collection("chatUrl");
  const query = urlRef.orderBy("createdAt", "desc").limit(1);
  const [url] = useCollectionData(query, { idField: "id" });

  const changeUrl = async (e) => {
    e.preventDefault();
    const { uid } = auth.currentUser;
    if (utils.validateYouTubeUrl(UrlValue)) {
      await urlRef.add({
        url: utils.covertEmbedded(UrlValue),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
      });
    } else {
      toast.error(`${UrlValue} is not valid URL`, { position: "top-center" });
    }
    setUrlValue("");
  };

  return (
    <>
      <div className="flex h-[90%] justify-center items-center">
        {url && (
          <iframe
            width="100%"
            height="100%"
            src={url[0].url}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <form
        onSubmit={changeUrl}
        className="flex h-[10%] justify-center items-center"
      >
        <input
          className="leading-normal bg-transparent min-w-[50%] w-[80%] max text-2xl text-gray-800 border-black border-b-[1px] outline-none mx-10"
          placeholder="Insert URL"
          value={UrlValue}
          onChange={(e) => setUrlValue(e.target.value)}
        />
        <button
          className="btn flex gap-2 min-w-[15%] justify-between text-base items-center text-center no-underline cursor-pointer mx-4"
          type="submit"
        >
          <AiOutlineSend color="#ECECF3" size={24} /> Change URL
        </button>
      </form>
    </>
  );
}

export default VideoRoom;
