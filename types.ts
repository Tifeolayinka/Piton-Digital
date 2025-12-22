export enum ServiceType {
  DESIGN = 'Design',
  NOCODE = 'No-Code',
  VIBE_CODING = 'Vibe Coding'
}

export interface Project {
  id: string;
  title: string;
  category: ServiceType;
  image: string;
  description: string;
}

export interface VibeAnalysisResult {
  appName: string;
  slogan: string;
  vibeScore: number;
  colorPalette: string[];
  techStack: string[];
  analysis: string;
}

export interface VibeRequest {
  idea: string;
}
