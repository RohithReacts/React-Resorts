// ---------------------------
// Types
// ---------------------------

export interface Project {
  name: string;
  description: string;
  image: string;   // <-- updated
  id: string;
}


// ---------------------------
// Data
// ---------------------------

export const PROJECTS: Project[] = [
  {
    name: "Alexander City, New York",
    description: "The Morden Versailles",
    image: "/images/recentprojects.jpg",     // <-- changed
    id: "project1",
  },
  {
    name: "Lake Havasu City, Washington",
    description: "Buckingham Palace",
    image: "/images/recent1.jpg",    // <-- changed
    id: "project2",
  },
  {
    name: "North Little Rock, California",
    description: "Les Palais Bulles",
    image: "/images/recent2.jpg",      // <-- changed
    id: "project3",
  },
];


