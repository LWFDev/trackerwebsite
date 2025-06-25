
import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

interface ResourcesDropdownProps {
  scrollToTop: () => void;
}

const ResourcesDropdown = ({ scrollToTop }: ResourcesDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const resourcesButtonRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div 
      className="relative group" 
      ref={resourcesButtonRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DropdownMenu open={isOpen} onOpenChange={setIsOpen} modal={false}>
        <DropdownMenuTrigger asChild>
          <button className="flex items-center text-gray-300 hover:text-gold-DEFAULT transition">
            Resources <ChevronDown size={16} className="ml-1" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-900 border-zinc-800 text-white">
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold-DEFAULT focus:bg-zinc-800 focus:text-gold-DEFAULT cursor-pointer">
            <Link to="/about" className="w-full" onClick={scrollToTop}>
              About Us
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold-DEFAULT focus:bg-zinc-800 focus:text-gold-DEFAULT cursor-pointer">
            <Link to="/contact" className="w-full" onClick={scrollToTop}>
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ResourcesDropdown;
