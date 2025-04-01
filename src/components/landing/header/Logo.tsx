
import { Link } from 'react-router-dom';

interface LogoProps {
  scrollToTop: () => void;
}

const Logo = ({ scrollToTop }: LogoProps) => {
  return (
    <div className="flex items-center">
      <Link 
        to="/" 
        className="text-xl font-bold flex items-center text-white"
        onClick={scrollToTop}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
          <rect width="24" height="24" rx="4" fill="#D4AF37"/>
          <path d="M7 12H17M7 8H17M7 16H13" stroke="black" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        TRACKER
      </Link>
    </div>
  );
};

export default Logo;
