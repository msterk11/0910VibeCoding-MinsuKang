export interface Teaser {
  title: string;
  detail: string;
}

export interface ContentsEntry {
  page: string;
  title: string;
  sub: string;
}

export interface Project {
  name: string;
  role: string;
  description: string;
}

export interface Note {
  term: string;
  note: string;
}

export interface LinkCard {
  label: string;
  kicker: string;
  url: string;
  display: string;
}

export interface Profile {
  name: string;
  nameLatin: string;
  role: string;
  affiliation: { school: string; department: string };
  masthead: {
    publisher: string;
    publisherEn: string;
    issue: string;
    issueShort: string;
    tagline: string;
    barcode: string;
    portraitCaption: string;
    credits: string;
    typeNote: string;
  };
  cover: {
    storyKicker: string;
    storyTitle: string;
    teasers: Teaser[];
  };
  contents: {
    note: string;
    entries: ContentsEntry[];
  };
  feature: {
    kicker: string;
    title: string;
    leadDropCap: string;
    lead: string;
    leadSecondary: string;
  };
  projects: Project[];
  interests: {
    kicker: string;
    title: string;
    items: Note[];
  };
  hobbies: {
    kicker: string;
    title: string;
    items: Note[];
    photoCaption: string;
  };
  colophon: {
    kicker: string;
    title: string;
  };
  links: LinkCard[];
}
