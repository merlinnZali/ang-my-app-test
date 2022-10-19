import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('Value is weak', () => {
    const pipe = new StrengthPipe();
    const result = pipe.transform(9)
    expect(pipe).toBeTruthy();
    expect(result).toBe('9 is weak');
  });

  it('Value is strong', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toBe('20 is strong');
  });

  it('Value is the strongest', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(21)).toBe('21 is the strongest');
  });
});
