import React from "react";

import { AppLayout } from "layouts";

import { ChatRoom, VideoRoom } from "./components";

function ChatPage() {
  return (
    <AppLayout pageName="QChat">
      <div className="fixed flex h-[90%] w-full">
        <div className="flex flex-col w-[75%]">
          <VideoRoom />
        </div>
        <div className="w-[25%] max-w-[500px] min-w-[400px]">
          <ChatRoom />
        </div>
      </div>
    </AppLayout>
  );
}

export default ChatPage;
