import { CourseItem } from '../app/interfaces/CourseItem';

export class CourseItemClass implements CourseItem {
  private id: string;
  private name: string;
  private description: string;
  private createDate: Date;
  private duration: number;
  private startDate: Date;
  private durationHour: string;
  private durationMinutes: string;
  constructor() {}
}
