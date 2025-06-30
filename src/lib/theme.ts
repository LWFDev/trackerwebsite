
export const lightModeClasses = {
  background: 'bg-white',
  surface: 'bg-gray-50',
  card: 'bg-white',
  text: {
    primary: 'text-gray-900',
    secondary: 'text-gray-600',
    muted: 'text-gray-500'
  },
  border: 'border-gray-200',
  hover: {
    background: 'hover:bg-gray-100',
    border: 'hover:border-gray-300'
  }
};

export const darkModeClasses = {
  background: 'bg-black',
  surface: 'bg-zinc-900',
  card: 'bg-zinc-900/50',
  text: {
    primary: 'text-white',
    secondary: 'text-gray-400',
    muted: 'text-gray-500'
  },
  border: 'border-zinc-800',
  hover: {
    background: 'hover:bg-zinc-800',
    border: 'hover:border-zinc-700'
  }
};

export const getThemeClasses = (isDarkMode: boolean) => {
  return isDarkMode ? darkModeClasses : lightModeClasses;
};
