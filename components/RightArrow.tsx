import { useRouter } from 'next/router';

const RightArrow = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/GreenPage');
    };
    return (
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick= {handleClick}> 
            <div className="border-t-16 border-b-16 border-1-16 border-solid border-transparent border-1-black"></div>
        </div>
    );
};

export default RightArrow;