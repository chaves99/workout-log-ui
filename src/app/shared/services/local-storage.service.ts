import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  public store(key: string, value: string): Promise<void> {
    return Preferences.set({ key: key, value: value });
  }

  public get(key: string): Promise<{ value: string | null }> {
    return Preferences.get({ key: key });
  }
}
