// ---------------------------
// Types
// ---------------------------

export interface Project {
  name: string;
  image: string;   // <-- updated
  id: string;
}


// ---------------------------
// Data
// ---------------------------

export const PROJECTS: Project[] = [
  {
    name: "Alexander City, New York",
    image: "/images/recentprojects.jpg",     // <-- changed
    id: "project1",
  },
  {
    name: "Lake Havasu City, Washington",
    image: "/images/recent1.jpg",    // <-- changed
    id: "project2",
  },
  {
    name: "North Little Rock, California",
    image: "/images/recent2.jpg",      // <-- changed
    id: "project3",
  },
];


