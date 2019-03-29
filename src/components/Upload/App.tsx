import React, { ChangeEvent } from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { createStyles } from "@material-ui/core/styles";
import Preview from "../Preview/App";

interface State {
  selectedFile: File | null;
}

export default class extends React.Component<any, Readonly<State>> {
  private inputRef: React.RefObject<HTMLInputElement>;

  private readonly style = createStyles({
    uploadButton: {
      marginTop: "20px"
    },
    rightIcon: {
      marginLeft: "15px"
    },
    layout: {
      textAlign: "center"
    },
    preview: {
      marginTop: "30px"
    },
    fileInput: {
      display: "none"
    }
  });

  readonly state: State = {
    selectedFile: null
  };

  constructor(props: any) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleButtonClick() {
    const ref = this.inputRef.current;
    if (ref) {
      ref.click();
    }
  }

  handleFileSelected(event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const type = file.type;
      this.setState({
        selectedFile: file
      });
    }
  }

  render() {
    return (
      <div style={this.style.layout}>
        <Button
          variant="contained"
          color="primary"
          style={this.style.uploadButton}
          onClick={this.handleButtonClick.bind(this)}
        >
          <input
            ref={this.inputRef}
            type="file"
            style={this.style.fileInput}
            onChange={this.handleFileSelected.bind(this)}
          />
          Upload Video
          <CloudUploadIcon style={this.style.rightIcon} />
        </Button>
        <div style={this.style.preview}>
          <Preview selectedFile={this.state.selectedFile} />
        </div>
      </div>
    );
  }
}
