import styled from 'styled-components'
import Image from 'next/image'


const Main = styled.main`
    background-size:cover;
    background-repeat:no-repeat;
    width:100%;
    height:100vh;
    box-sizing:border-box ;
`

export default function MainContent () {
    return (
        <Main>
            <Image src={'/public/1.jpg'} height={500} width={1024} />
            <section>
                <h1> I am here</h1>
            </section>
        </Main>
  )
}