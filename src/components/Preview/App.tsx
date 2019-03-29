import React from "react";
import { type } from "os";

// MimeType, ref to https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
enum VideoMineType {
  AVI = "video/x-msvideo",
  MPEG = "video/mpeg",
  OGG = "video/ogg",
  WEBM = "video/webm"
}

enum ImageMineType {
  JPG = "image/jpeg",
  GIF = "image/gif",
  PNG = "image/png"
}

interface Props {
  selectedFile: File | null;
}

export default class extends React.Component<Props, any> {
  render() {
    const file = this.props.selectedFile;
    if (!file) {
      return <div> Please upload image or video </div>;
    }
    const type = file.type;
    let isVideo = false;
    let isImage = false;
    for (let each in VideoMineType) {
      if (type === VideoMineType[each]) {
        isVideo = true;
        break;
      }
    }
    for (let each in ImageMineType) {
      if (type === ImageMineType[each]) {
        isImage = true;
        break;
      }
    }
    if (!isVideo && !isImage) {
      return <div> Please choose right image or video </div>;
    } else {
      const url = window.URL.createObjectURL(file);
      if (isVideo) {
        return <video src={url} />;
      } else {
        return <img src={url} />;
      }
    }
  }
}
