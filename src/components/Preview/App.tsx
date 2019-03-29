import React from "react";

// MimeType, ref to https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
enum AllowedMimeType {
  AVI = "video/x-msvideo",
  MPEG = "video/mpeg",
  OGG = "video/ogg",
  WEBM = "video/webm",
  JPG = "image/jpeg",
  GIF = "image/gif",
  PNG = "image/png"
}

interface Props {
  selectedFile: File | null;
}

export default class extends React.Component<Props, any> {
  render() {
    if (!this.props.selectedFile) {
      return <div> Please upload a photo </div>;
    }
    const type = this.props.selectedFile.type;
    let allowed = false;
    for (let each in AllowedMimeType) {
      if (type === AllowedMimeType[each]) {
        allowed = true;
        break;
      }
    }
    if (!allowed) {
      return <div> Please choose right picture | video. </div>;
    } else {
      return <div> Good job </div>;
    }
  }
}
