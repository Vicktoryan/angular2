import { ItemStateDirective } from './item-state.directive';
import { ElementRef } from '@angular/core';

describe('ItemStateDirective', () => {
  let directive: ItemStateDirective;

  it('should create an instance', () => {
    directive = new ItemStateDirective({ nativeElement: { style: {} } });
    expect(directive).toBeTruthy();
    directive.item = {
      id: '',
      startDate: new Date('12/12/2018'),
      duration: 100,
      name: '',
      description: '',
      createDate: new Date()
    };
  });

  it('should onInit true', () => {
    directive.ngOnInit();
    expect(directive.item.duration).toEqual(100);
    const result = directive.item.duration && directive.item.startDate;
    expect(result).toBeTruthy();
    const startDate = (new Date(directive.item.startDate).getTime() + directive.item.duration * 60000);
    const date: Date = new Date();
    let compare = date.getTime() > startDate;
    expect(compare).toBeTruthy();
  });
});
