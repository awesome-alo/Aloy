import React from "react";
import "./App.css";
import UploadButton from "../Upload/App";

export default class extends React.Component {
  render() {
    return (
      <div className="layout">
        <div> Welcome to Alo </div>
        <UploadButton />
      </div>
    );
  }
}
