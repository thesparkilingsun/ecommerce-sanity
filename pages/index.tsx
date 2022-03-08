import Navigation from '../component/nav/navigation';
import Display from '../component/upload/display';
import  Content  from './api/content';

export default function Home() {
    return (
        <main id='Container'>
            <Navigation />
            <Display />
            <Content />
        </main>
    );
}
