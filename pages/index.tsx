import Navigation from '../component/nav/navigation';
import Display from '../component/upload/display';
import sanityClient from '../sanity/sanity-client';
import  Content  from './api/content';

export default function Home(props) {
  console.log(props)
    
    return (
        <main id='Container'>
            <Navigation />
            <Display />
             
        </main>
    );
}


export async function getStaticProps(){
    const query = `*[ _type=="product" && slug.current=="pencil"]
{
  productName,
  productCost
}[0]` ;

const product = await sanityClient.getAll('product')
console.log(product)
    

if (!product) {
    return {
    notFound: true,
    }
};
return {
 props: {
  product,
 },
            
}
};