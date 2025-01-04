import { SafePipe } from './safe-pipe.pipe';

describe('SafePipe', () => {
  it('create an instance', () => {
    const pipe = new SafePipe('url');
    expect(pipe).toBeTruthy();
  });
});
