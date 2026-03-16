export interface WikiEntry {
  type: string;
  title?: string;
  subtitle?: string;
  featured?: string[];
}

export const WIKI_DATA: Record<string, WikiEntry> = {
  home: {
    type: "home",
    title: "The Red Dawn Project",
    subtitle: "An Encyclopedia of the New World Order",
    featured: [],
  },
};
