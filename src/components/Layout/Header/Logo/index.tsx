import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

    return (
        <Link href="/">
            <Image
                src="/images/logo/light-logo.png"
                alt="logo"
                width={200}
                height={50}
                quality={100}
                className='dark:hidden'
            />
            <Image
                src="/images/logo/logo.png"
                alt="logo"
                width={200}
                height={50}
                quality={100}
                className='dark:block hidden'
            />
        </Link>
    );
};

export default Logo;
