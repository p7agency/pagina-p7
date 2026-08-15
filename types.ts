
export interface MentoriaSubItem {
  title: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  code: string;
  description: string;
  highlight?: boolean;
  isMentoria?: boolean;
  subItems?: MentoriaSubItem[];
}

export interface SectionContent {
  label: string;
  description: string;
  linkText?: string;
}
