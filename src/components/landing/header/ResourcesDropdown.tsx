
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

interface ResourcesDropdownProps {
  scrollToTop: () => void;
}

const ResourcesDropdown = ({ scrollToTop }: ResourcesDropdownProps) => {
  const resourcesButtonRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative group" ref={resourcesButtonRef}>
      <DropdownMenu>
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
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold-DEFAULT focus:bg-zinc-800 focus:text-gold-DEFAULT cursor-pointer">
            Blog
          </DropdownMenuItem>
          <DropdownMenuItem className="hover:bg-zinc-800 hover:text-gold-DEFAULT focus:bg-zinc-800 focus:text-gold-DEFAULT cursor-pointer">
            Documentation
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default ResourcesDropdown;
