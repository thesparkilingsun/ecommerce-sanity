import styled from "styled-components"

const UploadContainer = styled.main`
    background-color: ${(props )=> props.theme.colors.baseTint};
    width: 100%;
    padding: 1rem;

`


export default function Upload(){
    
    return(
        <UploadContainer>
            <form>
                <div>
                    <label htmlFor="productName">Product Name:</label>
                    <input type="text" id="productName" name="Product Name" />
                </div>
                <div>
                    <label htmlFor="productDescription">Description:</label>
                    <input type="text" id="productDescription" name="Product Description" />
                </div>
                <div>
                    <label htmlFor="productCost">Cost</label>
                    <input type="text" id="productName" name="Product Cost" />
                </div>
                <div>
                    <label htmlFor="productImage">Image</label>
                    <input type="image" id="productImage" name="Product Image" />
                </div>
            </form>
        </UploadContainer>
    )
}