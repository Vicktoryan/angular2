import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  let pipe: DurationPipe;
  it('create an instance', () => {
    pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('check value', () => {
    expect(pipe.transform('100')).toBe('1h 40min');
    expect(pipe.transform('10')).toBe('10min');
  });
});
