export interface CourseItem {
  id: string;
  name: string;
  description: string;
  createDate: Date;
  duration?: number;
  startDate?: Date;
  durationHour?: string;
  durationMinutes?: string;
  isTopRated?: boolean;
}
