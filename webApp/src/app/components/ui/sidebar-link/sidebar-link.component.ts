import { Component, Input} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar-link',
  imports: [RouterLink],
  templateUrl: './sidebar-link.component.html',
  styleUrl: './sidebar-link.component.css'
})
export class SidebarLinkComponent {
    @Input({required: true}) text: string = ""; // Text to display in the link
    @Input({required: true}) link: string = ""; // URL to navigate to when clicked

    constructor() { } // Constructor for the component, currently empty
}
