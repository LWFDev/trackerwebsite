export interface ModuleIcon {
  src: string;
  alt: string;
}

export interface Module {
  title: string;
  description: string;
  icon: ModuleIcon;
  link: string;
  color?: string;
  category: string;
}

export interface ModuleCategory {
  title: string;
  modules: Module[];
}