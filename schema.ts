import type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed,
    SanityImageAsset,
    SanityImageMetadata,
    SanityImageDimensions,
    SanityImagePalette,
    SanityImagePaletteSwatch
} from 'sanity-codegen';

export type {
    SanityReference,
    SanityKeyedReference,
    SanityAsset,
    SanityImage,
    SanityFile,
    SanityGeoPoint,
    SanityBlock,
    SanityDocument,
    SanityImageCrop,
    SanityImageHotspot,
    SanityKeyed,
    SanityImageAsset,
    SanityImageMetadata,
    SanityImageDimensions,
    SanityImagePalette,
    SanityImagePaletteSwatch
};

/**
 * Product Details
 *
 *
 */
export interface Product extends SanityDocument {
    _type: 'product';

    /**
     * Product Name — `string`
     *
     * Field to input product name
     */
    productName: string;

    /**
     * Product Description — `string`
     *
     * Describe the type and features of the product
     */
    productDescription: string;

    /**
     * Product Cost — `string`
     *
     * Cost of the item
     */
    productCost: string;

    /**
     * Slug — `slug`
     *
     *
     */
    slug: { _type: 'slug'; current: string };

    /**
     * Product Image — `image`
     *
     *
     */
    productImage?: {
        _type: 'image';
        asset: SanityReference<SanityImageAsset>;
        crop?: SanityImageCrop;
        hotspot?: SanityImageHotspot;
    };
}

export type Documents = Product;
