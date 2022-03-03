import { createRef, useState } from "react";

export default function UploadImages(){
    const [values, setValues] = useState({imagePreviewUrl:null,picFile:null});
    
    let fileInput = createRef();

    //when user click submit to upload picture
    const onPictureSubmit = ()=>{
        fileInput.current.click();
    }
    const imageUploadHandler = (e:any)=>{
        e.preventDefault();
        let reader = new FileReader();
        let inFile = e.target.files[0];
        reader.onloadend = () =>{
            setValues({...values,
                imagePreviewUrl:reader.result,
                picFile:inFile,
            })
        };
        reader.readAsDataURL(inFile);
    }
  
    return null;
}