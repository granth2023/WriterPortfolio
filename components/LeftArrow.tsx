import { useRouter } from 'next/router';

const LeftArrow = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/BluePage');
    };
    return (
        <div className="aboslute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick= {handleClick}> 
            <svg className="h-8 w-8 text-black" fill="none" viewBox=" 0 0 24 24" stroke="currentColor">
             <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d="M15 191-7-7 7-7" />
            </svg>
        </div>
    );
};