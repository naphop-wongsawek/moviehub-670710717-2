// รันก่อนทุกไฟล์เทสต์
import '@testing-library/jest-dom';

const realWarn = console.warn;

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg, ...rest) => {
    if (String(msg).includes('React Router Future Flag Warning')) return;
    realWarn(msg, ...rest);
  });
});