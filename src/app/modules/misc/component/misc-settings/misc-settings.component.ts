import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserSettings, UserSettingsComponent } from 'src/app/layout/type';
import { EnumValues } from '@app/class';


export enum MiscStashNavigation {
  Disabled = 0,
  Normal = 1,
  Inverse = 2
}

export interface MiscUserSettings extends UserSettings {
  miscStashNavigationMode: MiscStashNavigation;
  miscStashHighlightKeybinding: string;
  miscWikiKeybinding: string;
  miscWikiExternalKeybinding: string;
  miscPoedbKeybinding: string;
  miscPoedbExternalKeybinding: string;
}

@Component({
  selector: 'app-misc-settings',
  templateUrl: './misc-settings.component.html',
  styleUrls: ['./misc-settings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MiscSettingsComponent implements UserSettingsComponent {
  public navigations = new EnumValues(MiscStashNavigation);

  public settings: MiscUserSettings;

  public load(): void {
    // stub
  }
}
