export default {
    name: 'product',
    title: 'Product Details',
    type: 'document',
    id: 'productOne',
    fields: [
        {
            name: 'productName',
            title: 'Product Name',
            type: 'string',
            description: 'Field to input product name',
            codegen: { required: true }
        },
        {
            name: 'productDescription',
            title: 'Product Description',
            type: 'string',
            description:
                'Describe the type and features of the product',
            codegen: { required: true }
        },
        {
            name: 'productCost',
            title: 'Product Cost',
            type: 'string',
            description: 'Cost of the item',
            codegen: { required: true },
            validation: (Rule) => [
                Rule.required().error('Only Numbers are allowed')
            ]
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title'
            },
            codegen: { required: true }
        },
        {
            name: 'productImage',
            title: 'Product Image',
            type: 'image',
            validation: (Rule) => [
                Rule.required().error('Only image files allowed')
            ]
        }
    ]
};
