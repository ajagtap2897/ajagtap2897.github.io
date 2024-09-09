import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isLightTheme = true

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.applyTheme(this.isLightTheme? "light-theme": "dark-theme")
  }

  applyTheme = (theme: string) => {
    const body = document.body
    this.renderer.removeClass(body, 'light-theme')
    this.renderer.removeClass(body, 'dark-theme')
    this.renderer.addClass(body, theme)
  }

  title = 'chatty-chat';
}
