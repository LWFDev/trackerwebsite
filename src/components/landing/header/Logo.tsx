
import { Link } from 'react-router-dom';

interface LogoProps {
  scrollToTop: () => void;
}

const Logo = ({ scrollToTop }: LogoProps) => {
  return (
    <div className="flex items-center">
      <Link 
        to="/" 
        className="flex items-center"
        onClick={scrollToTop}
      >
        <img 
          src="https://nubosync.com/wp-content/uploads/2025/04/tracker_logo.png" 
          alt="Tracker Logo" 
          className="h-8 w-auto" 
        />
      </Link>
    </div>
  );
};

export default Logo;
