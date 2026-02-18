import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { Nav } from "./page/nav/nav";
import { Footer } from "./page/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title = 'vibeit';

  ngOnInit(): void {
    initFlowbite();
  }
}
