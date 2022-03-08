import sanityClient from "../../sanity/sanity-client";


 export default function Content(props:any){  
    
    console.log(props)
        return (<span>
            Nothing
        </span>
            
        )
 }

  export async function getStaticProps () {
      
    const product = await sanityClient.get('product','productOne');
    const {productName,productCost} = product;
    
    return {
        props: productName
    };
}
