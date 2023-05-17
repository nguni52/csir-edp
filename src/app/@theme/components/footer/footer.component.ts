import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="#">Digilims</a></b> 2022
    </span>
  `,
})
export class FooterComponent {
}
