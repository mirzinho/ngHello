import {Component, VERSION} from '@angular/core';

export enum ActionResponseType {
  Success,
  Error,
  Warning
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Hello';

  ngVersion = VERSION.full;

  dispatchEvent = (): void => {

    const event = new CustomEvent('shellEvent', {
      detail: {
        message: 'Event from ngHello App',
        actionResponseType: ActionResponseType.Success,
        data: {}
      }
    } );
    window.dispatchEvent(event);
  }
}
