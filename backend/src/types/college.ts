export type College = {
  id: number;
  name: string;
  slug: string;
  city: string;
  state: string;
  fees_min: number;
  fees_max: number;
  rating: number;
  ranking: number;
  placements_avg: number;
  exams: string[];
  top_course: string;
  established: number;
  ownership: string;
  image_url: string | null;
};
