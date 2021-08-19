import { Helper } from './helper';

fdescribe('Helper', () => {
  describe('isNullOrEmpty', () => {
    it('should return true', () => {
      const value = '';
      const res = Helper.isNullOrEmpty(value);
      expect(res).toBeTruthy();
    });

    it('should return false', () => {
      const value = 'FULL';
      const res = Helper.isNullOrEmpty(value);
      expect(res).toBeFalsy();
    });
  });

  describe('unsubscribeSubscriptions', () => {
    it('should unsubscribe all subscriptions', () => {
      const sub1 = jasmine.createSpyObj('sub1', ['unsubscribe']);
      const sub2 = jasmine.createSpyObj('sub1', ['unsubscribe']);
      const subscriptions = [sub1, sub2];
      Helper.unsubscribeSubscriptions(subscriptions);
      expect(sub1.unsubscribe).toHaveBeenCalled();
      expect(sub2.unsubscribe).toHaveBeenCalled();
    });
  });
});
