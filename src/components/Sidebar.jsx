import React, { useContext, useState } from "react";
import "./Sidebar.css";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import { Context } from "../context/context";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="top">
          <MenuIcon className="menu" onClick={toggleSidebar} />
          <div className="new-chat" onClick={() => newChat()}>
            <AddIcon />
            {isOpen ? <p>New Chat</p> : null}
          </div>
          {isOpen ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              {prevPrompts.map((item, idx) => {
                return (
                  <div
                    className="recent-entry"
                    onClick={() => loadPrompt(item)}
                  >
                    <ChatBubbleOutlineIcon />
                    <p key={idx}>{item.slice(0, 20)}...</p>
                  </div>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item">
            <HelpOutlineIcon />
            {isOpen ? <p>Help</p> : null}
          </div>
          <div className="bottom-item">
            <HistoryIcon />
            {isOpen ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item">
            <SettingsIcon />
            {isOpen ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
