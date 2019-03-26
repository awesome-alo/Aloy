import React from 'react'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { createStyles } from '@material-ui/core/styles'
import Preview from './Preview'

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

const onClickUploadButton = () => {
    alert( '123')
}

export default class extends React.Component{

    render(){
        return (
            <div style = {style.layout} >
                <Button variant="contained" color="primary" style={style.uploadButton}>
                    <input type = 'file' style = {style.fileInput}/>
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