import { UseClient } from "../../sanity/sanityDataset";

export async function getStaticProps(){
 const client = UseClient();
 const result = await client.fetch(`
    *[type=="product" && document.current == $document][0]
 `);

}