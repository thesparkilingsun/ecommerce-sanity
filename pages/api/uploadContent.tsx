import { createReadStream } from "fs";
import { basename } from "path";
import { UseClient } from "../../sanity/sanityDataset";

export async  function UploadFile({file}:{file:File}){
    const client = UseClient();
    client.assets.upload('file',file )
    .then(asset => {
        console.log(asset)
    })
    .then(() =>{
        console.log("Done!!")
    })
}