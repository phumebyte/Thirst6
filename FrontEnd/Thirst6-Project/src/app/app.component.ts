import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//imported by Nonhlelo
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    CommonModule, 
    ReactiveFormsModule,
    RouterModule, 
    RouterLink,
    FlexLayoutModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Thirst6-Project';
}
