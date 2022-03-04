import { useState } from "react";
import styled from "styled-components";

const Input = styled.input({
    border:'none',
    paddingLeft:'0.125rem',
    marginLeft: '0.55rem',
    
})


export default function UploadImages(){
    const [values, setValues] = useState({imagePreviewUrl:null,picFile:null});
    console.log(values.imagePreviewUrl);
    console.log(values.picFile)
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
  
    return (
        <>
            <Input className="inputSettings" type="file"  
            name="Product Image" accept='image/*' 
            onChange={imageUploadHandler}
           />
           <div>
            <img 
                src={values.imagePreviewUrl}
                alt="..."
                style={{objectFit:'contain'}}
                />
           </div>
                        
        </>
    );
}