import React, { useContext } from "react";
import "./Main.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ExploreIcon from "@mui/icons-material/Explore";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CollectionsIcon from "@mui/icons-material/Collections";
import MicIcon from "@mui/icons-material/Mic";
import SendIcon from "@mui/icons-material/Send";
import { Context } from "../context/context";
import { assets } from "../assets/assets";
import LinearColor from "./LinearColor";
const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <>
      <div className="main">
        <div className="navbar">
          <p>Gemini</p>
          <AccountCircleIcon
            className="profile"
            style={{ fontSize: "2.2rem" }}
          />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Dev.</span>
                </p>
                <p>How can I help you Today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>
                    Suggest beautiful places to see on an upcoming road trip
                  </p>
                  <ExploreIcon className="icon" style={{ fontSize: "2rem" }} />
                </div>
                <div className="card">
                  <p>Briefly Summarize this concept: Urban Planning</p>
                  <TipsAndUpdatesIcon
                    className="icon"
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="card">
                  <p>Brainstrom team bonding activities for our work retreat</p>
                  <ChatBubbleOutlineIcon
                    className="icon"
                    style={{ fontSize: "2rem" }}
                  />
                </div>
                <div className="card">
                  <p>Improve the readability of the following code</p>
                  <CodeOffIcon className="icon" style={{ fontSize: "2rem" }} />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <AccountCircleIcon style={{ fontSize: "2.2rem" }} />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="" />
                {loading ? (
                  <div className="loader">
                    <LinearColor />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}
          <div className="main-bottom">
            <div className="search-input">
              <input
                type="text"
                placeholder="Enter a prompt here"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <div>
                <CollectionsIcon />
                <MicIcon />
                <SendIcon onClick={() => onSent()} />
              </div>
            </div>
            <p className="bottom-info">
              Gemini may display inaccurate info, including about people, So
              double-check its responses. Your Privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
