import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  // @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log("constructor called")
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit called")
  }
  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked called")
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentInit called")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked called")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit called")
  }

  ngDoCheck() {
    console.log("ngDoCheck called!!!")
  }

  ngOnDestroy(): void {
    console.log("OnDestroy called")
  }


}
