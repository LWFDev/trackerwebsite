
import { useTheme } from '@/contexts/ThemeContext';

export const useThemeClasses = () => {
  const { isDarkMode } = useTheme();
  
  const getThemeClass = (lightClass: string, darkClass: string) => {
    return isDarkMode ? darkClass : lightClass;
  };
  
  const themeClasses = {
    background: getThemeClass('bg-white', 'bg-black'),
    surface: getThemeClass('bg-gray-50', 'bg-zinc-900'),
    card: getThemeClass('bg-white', 'bg-zinc-900/50'),
    border: getThemeClass('border-gray-200', 'border-zinc-800'),
    text: {
      primary: getThemeClass('text-gray-900', 'text-white'),
      secondary: getThemeClass('text-gray-600', 'text-gray-400'),
      muted: getThemeClass('text-gray-500', 'text-gray-500')
    },
    hover: {
      background: getThemeClass('hover:bg-gray-100', 'hover:bg-zinc-800'),
      border: getThemeClass('hover:border-gray-300', 'hover:border-zinc-700')
    }
  };
  
  return { themeClasses, getThemeClass, isDarkMode };
};
