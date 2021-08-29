import React from "react";
import {
  FaMars,
  FaVideo,
  FaMicrophone,
  FaSmile,
  FaStop,
  FaAngleRight,
  FaExpandArrowsAlt,
  FaVolumeDown,
  FaVolumeUp,
  FaFlag,
  FaRegSmile,
} from "react-icons/fa";
import ResizePanel from "react-resize-panel-ts";

export default function ChatBox() {
  return (
    <div className="wrapper-bg">
      <div className="flexx-1">
        <div className="side-card">
          <div className="gender-circle">
            <FaMars />
          </div>
          Connected to random partner for text chat
          <div className="card-options just-content-between">
            <div className="dis-flex align-center">
              <FaExpandArrowsAlt className="marr-3" />
              <FaVolumeUp className="marr-3" />
            </div>
            <FaFlag className="marr-3" />
          </div>
        </div>
        <div className="side-card mart-3">
          <div className="gender-circle">
            <FaMars />
          </div>
          <button className="out-btn">
            <FaVideo className="marr-3" />
            Start Video
          </button>
          <div className="card-options">
            <FaVideo className="marr-3" />
            <FaMicrophone className="marr-3" />
          </div>
        </div>
      </div>
      <div className="flexx-2 marl-3 black-bg">
        <div className="dis-flex align-center just-content-between">
          <p className="marb-0 mart-0 dis-flex cst-text-si">
            <FaRegSmile fontSize={18} />
            You are connected
          </p>
          <div className="gender_wrap select-wrapper">
            <span id="gndr_sel" className="trns">
              <span id="gndr_pref" className="all_gndr trns">
                Guys &amp; Girls
              </span>
            </span>
            <div className="select-body" style={{ display: "block" }}>
              <div className="select-title">
                <p>Gender Filter</p>
                <span className="st-desktop">Chat with:</span>
              </div>
              <ul id="gndr_lst">
                <li id="all_gndr" className="active">
                  <em className="ci all_gndr" /> Guys &amp; Girls
                </li>
                <li id="female_gndr" className="gender" data-code="f">
                  <em className="ci female_gndr" /> Girls Only
                </li>
                <li id="male_gndr" className="gender" data-code="m">
                  <em className="ci male_gndr" /> Guys Only
                </li>
                <li id="trans_gndr" className="gender" data-code="t">
                  <em className="ci trans_gndr" /> Transgenders Only
                </li>
                <li id="couple_gndr" className="gender" data-code="c">
                  <em className="ci couple_gndr" /> Couples Only
                </li>
              </ul>
              <div className="select-close" />
            </div>
          </div>
        </div>
        <hr className="blue-line mart-3" />
        <div className="video-bottomm">
          <button className="recordd-btn">
            <FaStop />
            STOP
          </button>
          <div className="chatt-typee rlt-form chat_input">
            <form id="msg-form" name="msgform0" noValidate autoComplete="off">
              <div className="ci_iw">
                <input type="text" id="chatMessage" className="form-control" placeholder="Type your message here" />
                <div className="chat-emoji">
                  <span className="emoji-btn trns">
                    <em className="ci ci-emoji gph-emoji" />
                  </span>
                </div>
              </div>
              <button id="cssend_btn" className="btn trns ci ci-right-arrow" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
