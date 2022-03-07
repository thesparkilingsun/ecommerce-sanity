import sanityClient from '@sanity/client';
import ProjectData from '../types/projectData';

export default function Client(client: ProjectData) {
    const values = sanityClient(client);
    return values;
}
