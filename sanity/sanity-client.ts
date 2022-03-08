import { createClient } from 'sanity-codegen';
// import { createClient } from 'next-sanity';
import { Documents } from '../schema';

export const config = {
    projectId: 'fd99bkxc',
    dataset: 'production',
    apiVersion: 'v2021-12-01',
    useCdn: true,
    usePreview: true
};

export default createClient<Documents>({
    ...config,
    fetch
});

// export default createClient({
//     ...config
// });

//Setup client to fetch data from getStatic props function
