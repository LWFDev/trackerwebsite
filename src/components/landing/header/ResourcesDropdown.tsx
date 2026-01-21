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
          <button className="flex items-center text-gray-300 hover:text-gold transition text-sm lg:text-base">
            Resources <ChevronDown size={16} className="ml-1" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          className="bg-zinc-900/95 backdrop-blur-md border-zinc-700 text-white min-w-[160px] z-[60] shadow-xl"
          sideOffset={8}
          align="start"
        >
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold focus:bg-zinc-800 focus:text-gold cursor-pointer">
            <Link to="/faq" className="w-full py-1" onClick={scrollToTop}>
              FAQ
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold focus:bg-zinc-800 focus:text-gold cursor-pointer">
            <Link to="/support" className="w-full py-1" onClick={scrollToTop}>
              Support
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold focus:bg-zinc-800 focus:text-gold cursor-pointer">
            <Link to="/about" className="w-full py-1" onClick={scrollToTop}>
              About Us
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold focus:bg-zinc-800 focus:text-gold cursor-pointer">
            <Link to="/contact" className="w-full py-1" onClick={scrollToTop}>
              Contact
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ResourcesDropdown;
