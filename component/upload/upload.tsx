import styled from "styled-components"
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
    

    return(
        <UploadContainer>
            <Form>
                <FieldSet>
                    <legend>Product Data</legend>
                    <div className="settings">
                        <label htmlFor="productName">Product Name</label>
                        <input className="inputSettings" type="text" name="Product Name" />
                    </div>
                    <div className="settings">
                        <label htmlFor="productDescription">Description:</label>
                        <input className="inputSettings" type="text"  name="Product Description" />
                    </div>
                    <div className="settings">
                        <label htmlFor="productCost">Cost</label>
                        <input className="inputSettings" type="text"  name="Product Cost" />
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