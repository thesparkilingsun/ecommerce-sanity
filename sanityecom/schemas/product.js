export default {
    name:'product',
    Title:'Product Details',
    type:'document',
    fields:[
        {
            name:'productName',
            title:'Product Name',
            type:'string',
            description:'Field to input product name',
        },
        {
            name:'productDescription',
            title:'Product Description',
            type:'string',
            description:'Describe the type and features of the product'
        },
        {
            name:'productCost',
            title:'Product Cost',
            type:'string',
            description:'Cost of the item',
            validation: (Rule) => [Rule.required().error('Only image files allowed')]
        },
        {
            name:'productImage',
            title:'Product Image',
            type:'image',
            validation: (Rule) => [Rule.required().error('Only image files allowed')]
        },
        
    ]
}