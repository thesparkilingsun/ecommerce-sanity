import { UseClient } from '../../sanity/sanityDataset';

export async function UploadFile({ file }: { file: File }) {
    const client = UseClient();
    client.assets
        .upload('file', file)
        .then((asset) => {
            console.log(asset);
        })
        .then(() => {
            console.log('Done!!');
        });
}
