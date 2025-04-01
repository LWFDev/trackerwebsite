
import { ReactNode } from "react";

export interface Module {
  title: string;
  description: string;
  icon: ReactNode;
  learnMoreLink: string;
}

export type ModulesData = Record<string, Module[]>;
