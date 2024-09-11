import { Component, OnInit} from '@angular/core';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import * as AOS from 'aos'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
title="Angular Project";
constructor(){
}

ngOnInit(){
AOS.init();
}
}
