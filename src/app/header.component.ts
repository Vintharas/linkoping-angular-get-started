import { Component } from "@angular/core";

@Component({
  selector: 'shop-header',
  template: `
  <section>
    <header>
        <h1>{{title}}</h1>
    </header>
  </section>
  `,
  styles: ['section { background-color: #333; color: white; padding: 12px;}']
})
export class HeaderComponent {
  title = "Gandalf's shop of Wondrous things";
}
