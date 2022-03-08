import { createClient } from 'sanity-codegen';
import { Documents } from '../schema';

const config = {
    projectId: 'fd99bkxc',
    dataset: 'production',
    apiVersion: 'v2021-12-01',
    useCdn: true
};

export default createClient<Documents>({
    ...config,
    fetch
});

//Setup client to fetch data from getStatic props function
