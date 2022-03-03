import ProjectData from "../types/projectData";
import Client from "./sanityClient";

const project:ProjectData = {
    projectId:"abcde",
    dataset:'production',
    apiVersion:'2021-12-01',
    token:'null',
    useCdn:false,
} 


export function UseClient(){
     const client = Client(project);
     return client; 
    };