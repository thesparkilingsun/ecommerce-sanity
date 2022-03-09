import Link from 'next/link'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';

const Container = styled.div`
    height:100%;
    max-width:100vw;
    font-size: 1.2rem;
    display:flex;
    justify-content:space-between ;
    background-color: ${( { theme } )=> theme.images.bgcolor};;
`

const NavigationBar = styled.nav`
    display:flex ;
    justify-content: space-evenly;
    width:100%;
    height: 100%;
    margin-left:5px;
    margin-right:5px;
   
   
`
const NavLink = styled(Link)`
    width:100%;
    height:fit-content;
    display:inline-flex ;
    align-items:center ;
    padding: 0.3rem 0.6rem;
    margin-right: 0.1rem ;
    font-weight:bold ;
    
     & a >:hover{
        background-color: ${( { theme } )=> theme.images.bgcolor || 'white'};
    }
    &a :link{
        background-color: ${( { theme } )=> theme.images.bgcolor};
    }
    
   

`

export default function Navigation () { 
    
    return (
    <header>
        <Container >
            <NavigationBar>
                <NavLink href="/project">
                    <a>Projects</a>
                </NavLink>
                <NavLink href="/about">
                    <a>About</a>
                </NavLink>
                <NavLink href="/">
                    <a>Skills</a>
                </NavLink>
                <NavLink href="/">
                    <a>Resume</a>
                </NavLink>
                <NavLink href="">
                   <a>Hobbies</a>
                </NavLink>
            </NavigationBar>
            <div>
                <SocialIcon url="https://www.youtube.com/watch?v=NO7_jgzVgbc" target="_blank" fgColor='#fff' style={{height:'35px', width:'35px'}} />
                <SocialIcon url="https://github.com/thesparkilingsun" target="_blank" fgColor='#fff' style={{height:'35px', width:'35px'}} />
                <SocialIcon url="https://www.linkedin.com/" target="_blank" fgColor='#fff' style={{height:'35px', width:'35px'}} />
            </div>
        </Container>
    </header>)
}