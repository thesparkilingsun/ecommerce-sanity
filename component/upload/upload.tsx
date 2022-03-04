import {ChangeEvent, useCallback, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components"
import { productCostState, productDescriptionState, productNameState } from "../../state/productValueState";
import theme from "../../theme/theme";
import UploadImages from "./uploadImages";


const UploadContainer = styled.main`
    background-color: ${(props )=> props.theme.colors.baseTint};
    width: 100%;
    padding: 1rem;
`
const Form = styled.form`
    width:fit-content;
    max-height:100vh;
    margin:0px auto;
    font-size: 1.49rem; 
  
`;

const FieldSet = styled.fieldset({
    padding:'2rem', 
    display:'flex',
    flexFlow:'column nowrap', 
    justifyContent:'space-between', 
    alignContent:'center',
    '.settings':{
        marginTop:'1rem',
        display:'flex',
        flexFlow:' row nowrap',
        justifyContent:'space-between',
        alignContent:'stretch',
        
    },
    '& .settings > .inputSettings':{
            border:'none',
            paddingLeft:'0.125rem',
            marginLeft: '0.55rem',
    }
})


export default function Upload(){
    const  [productName, setProductName] = useRecoilState(productNameState)   
    const [description, setDescription] = useRecoilState(productDescriptionState);
    const [cost,setCost] = useRecoilState(productCostState);

    const onNameChange = useCallback((event: ChangeEvent<HTMLInputElement>)=>
        { 
            setProductName(event.target.value); 

        },[setProductName])
    
    const onDescriptionChange = useCallback((event: ChangeEvent<HTMLInputElement>)=>
    { 
        setDescription(event.target.value); 

    },[setDescription])

    const onCostChange = useCallback((event: ChangeEvent<HTMLInputElement>)=>
    { 
        setCost(event.target.value); 

    },[setCost])


    return(
        <UploadContainer>
            <Form>
                <FieldSet>
                    <legend>Product Data</legend>
                    <div className="settings">
                        <label htmlFor="productName">Product Name</label>
                        <input 
                            className="inputSettings" 
                            value={productName} 
                            type="text" 
                            onChange={onNameChange}
                            name="Product Name" />
                    </div>
                    <div className="settings">
                        <label htmlFor="productDescription">Description:</label>
                        <input className="inputSettings" 
                            type="text"  
                            name="Product Description"
                            onChange={onDescriptionChange}
                            value={description}
                            />
                    </div>
                    <div className="settings">
                        <label htmlFor="productCost">Cost</label>
                        <input className="inputSettings" 
                            type="text"  
                            onChange={onCostChange}
                            value={cost}
                            name="Product Cost" />
                    </div>
                    <div className="settings" style={{justifyContent:'center'}}>
                        <button style={{width:'60%',
                            paddingTop:'0.35rem',
                            paddingBottom:'0.35rem',
                            fontSize:'1.275rem',
                            backgroundColor:'#12A8E0',
                            color:'#f1ebe3',
                            border:'none',
                            borderRadius:'1rem'
                            }}> Submit</button>
                    </div>
                    {/* <div className="settings">
                        <label htmlFor="productImage">Image</label>
                        <UploadImages />
                    </div> */}
                </FieldSet>
            </Form>
        </UploadContainer>
    )
}


