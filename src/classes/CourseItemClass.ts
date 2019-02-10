import { CourseItem } from '../app/interfaces/CourseItem';

export class CourseItemClass implements CourseItem {
  public id: string;
  public name: string;
  public description: string;
  public createDate: Date;
  public duration: number;
  public startDate: Date;
  public durationHour: string;
  public durationMinutes: string;
  public isTopRated: boolean;
  constructor() {}
}
