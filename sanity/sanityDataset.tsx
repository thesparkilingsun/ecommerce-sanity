import ProjectData from '../types/projectData';
import Client from './sanityClient';

const project: ProjectData = {
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    apiVersion: process.env.API_VERSION,
    useCdn: false
};

export function UseClient() {
    const client = Client(project);
    return client;
}
