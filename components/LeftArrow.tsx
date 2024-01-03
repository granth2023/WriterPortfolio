import { useRouter } from 'next/router';

const LeftArrow = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/BluePage');
    };

    return (
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={handleClick}>
            <div className="relative">
                {/* Arrow Head */}
                <div className="w-0 h-0 border-t-[20px] border-b-[20px] border-r-[30px] border-solid border-transparent" style={{borderRightColor: 'white'}}></div>
                {/* Arrow Tail */}
                <div className="absolute top-[-20px] left-[30px] w-[20px] h-[40px] bg-white"></div>
            </div>
        </div>
    );
};

export default LeftArrow;
