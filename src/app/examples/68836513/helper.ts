import { Subscription } from 'rxjs';

export class Helper {
  static unsubscribeSubscriptions(subscriptions: Subscription[]): void {
    subscriptions.forEach((subscription) => {
      if (subscription) {
        subscription.unsubscribe();
      }
    });
  }

  static isNullOrEmpty(value: string): boolean {
    return !value || value === undefined || value === '' || value.length === 0;
  }
}
