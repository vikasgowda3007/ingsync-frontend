import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'header-component',
  imports: [MatToolbarModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
