import { render } from '@testing-library/react';
import VideoPlayer from './videoplayer';


describe('Component: VideoPlayer', () => {
  Object.defineProperty(HTMLMediaElement.prototype, 'muted', {
    set: jest.fn(),
    get: jest.fn(),
  });

  HTMLMediaElement.prototype.play = jest.fn();
  HTMLMediaElement.prototype.pause = jest.fn();

  test('should render correctly', () => {
    const page = (
      <VideoPlayer
        posterSrc='posterSrc'
        videoLink='videoLink'
      />
    );

    const { container } = render(page);
    expect(container).toMatchSnapshot();
  });
});
