import sanityClient from '../sanityClient/sanity-client'


export default function Post (props:any) {
  console.log(props)
  return (<>Something</>)
}

export async function getStaticProps () {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const query = `*[_type=="post"]{
        title,
        slug,
        mainImage{
            asset->{
                _id,
                url
            },
            alt
        }
    }`
  const res = await sanityClient.fetch(query)
  console.log(res)
  return {
    props: {
      res,
    },
  }
}
