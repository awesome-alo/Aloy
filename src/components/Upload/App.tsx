import React, { ChangeEvent } from 'react'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { createStyles } from '@material-ui/core/styles'
import Preview from './Preview'

// MimeType, ref to https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Complete_list_of_MIME_types
enum AllowedMimeType {
    AVI = 'video/x-msvideo',
    MPEG = 'video/mpeg',
    OGG = 'video/ogg',
    WEBM = 'video/webm',
    JPG = 'image/jpeg',
    GIF = 'image/gif',
    PNG = 'image/png'
}

const style = createStyles({
    uploadButton: {
        marginTop: '20px'
    },
    rightIcon: {
        marginLeft: '15px'
    },
    layout: {
        textAlign: 'center'
    },
    preview: {
        marginTop: '30px'
    },
    fileInput: {
        display: 'none'
    }
});

export default class extends React.Component{

    private inputRef: React.RefObject<HTMLInputElement>

    constructor(props: any){
        super(props);
        this.inputRef = React.createRef();
        this.state = {
            selectedFile: null,
        }
    }

    handleButtonClick(){
        const ref = this.inputRef.current;
        if( ref ){
            ref.click();
        }
    }

    handleFileSelected(event: React.ChangeEvent<HTMLInputElement>){
        const files = event.target.files;
        if( files && files.length > 0 ){
            const file = files[0];
            const type = file.type;
            let allowed = false;
            console.log( type );
            for( let each in AllowedMimeType ){
                if( type === AllowedMimeType[each] ){
                    allowed = true;
                    break;
                }
            }
            if( allowed ){
                this.setState({
                    selectedFile: file
                })
            }else{
                // TODO: dispatch error message to global snackbar
            }
        }
    }

    render(){
        return (
            <div style = {style.layout} >
                <Button variant="contained" color="primary" style={style.uploadButton} onClick={this.handleButtonClick.bind(this)} >
                    <input ref={this.inputRef} type = 'file' style = {style.fileInput} onChange={this.handleFileSelected.bind(this)} />
                    Upload Video
                    <CloudUploadIcon style={style.rightIcon} />
                </Button>
                <div style = {style.preview}>
                    <Preview/>
                </div>
            </div>
        )
    }
}