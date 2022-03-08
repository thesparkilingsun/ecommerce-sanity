import { GetStaticProps } from "next";
import sanityClient from "../../sanity/sanity-client";


 export default function Content({props}:{props:string}){  
     
    console.log("PROPS",props)
        return (<span>
            {props.length}
        </span>
            
        )
 }


