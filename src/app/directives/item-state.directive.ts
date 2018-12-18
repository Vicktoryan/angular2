import { Directive, Input, ElementRef } from '@angular/core';
import { CourseItem } from '../interfaces/CourseItem';

@Directive({
  selector: '[appItemState]'
})
export class ItemStateDirective {
  @Input('appItemState') item: CourseItem;
  constructor(
    private el: ElementRef
  ) {
  }

  public ngOnInit(): void {
    if (this.item.startDate && this.item.duration) {
      const startDate = (new Date(this.item.startDate).getTime() + this.item.duration*60000);
      const date: Date = new Date();
      if (date.getTime() > startDate) {
        this.el.nativeElement.style.borderColor = 'green';
      }
    }
  }
}
