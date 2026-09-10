export interface Project {
  name: string;
  description: string;
  role: string;
}

export interface Link {
  label: string;
  url: string;
}

export interface Profile {
  name: string;
  affiliation: {
    school: string;
    department: string;
  };
  bio: string;
  projects: Project[];
  interests: string[];
  hobbies: string[];
  links: Link[];
}
