import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {MainApp} from '../app/main';

beforeEachProviders(() => [MainApp]);

describe('App: Main', () => {
  it('should have the `defaultMeaning` as 42', inject([MainApp], (app: MainApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([MainApp], (app: MainApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});
