
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ModulesButtonProps {
  isOpen: boolean;
  onHover: () => void;
  onClick: () => void;
}

const ModulesButton = ({ isOpen, onHover, onClick }: ModulesButtonProps) => {
  const location = useLocation();
  const buttonRef = useRef<HTMLDivElement>(null);

  return (
    <div 
      className="relative group"
      ref={buttonRef}
      onMouseEnter={onHover}
      onClick={onClick}
    >
      <button 
        className={`flex items-center transition ${location.pathname.includes('/modules') || isOpen ? 'text-gold' : 'text-gray-300 hover:text-gold'}`}
      >
        Modules <ChevronDown size={16} className={`ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};

export default ModulesButton;
