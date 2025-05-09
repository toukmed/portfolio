export interface NavItem {
  title: string;
  titleFr: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  image: string;
  tags: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  icon: string;
  level: number;
}

export interface Service {
  id: string;
  title: string;
  titleFr: string;
  description: string;
  descriptionFr: string;
  icon: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  titleFr: string;
  organization: string;
  organizationFr?: string;
  period: string;
  periodFr?: string;
  description: string;
  descriptionFr: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
