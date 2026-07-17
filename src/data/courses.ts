export interface Course {
  id: number;
  title: string;
  instructor: string;
  category: string;
  rating: number;
  lessons: number;
  level: string;
  image: string;
}


export const courses: Course[] = [

{
 id:1,
 title:"React Development Masterclass",
 instructor:"Sarah Johnson",
 category:"Programming",
 rating:4.9,
 lessons:40,
 level:"Beginner",
 image:"https://images.unsplash.com/photo-1633356122544-f134324a6cee"
},

{
 id:2,
 title:"UI/UX Design Fundamentals",
 instructor:"David Miller",
 category:"Design",
 rating:4.8,
 lessons:25,
 level:"Intermediate",
 image:"https://images.unsplash.com/photo-1558655146-d09347e92766"
},

{
 id:3,
 title:"Artificial Intelligence Basics",
 instructor:"Emily Watson",
 category:"AI",
 rating:4.9,
 lessons:35,
 level:"Advanced",
 image:"https://images.unsplash.com/photo-1677442136019-21780ecad995"
}

]