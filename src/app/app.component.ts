import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TableCanvasComponent} from "./table-canvas/table-canvas.component";
import {HashTableService} from "./Hashtable";
import {ControlPanelComponent} from "./control-panel/control-panel.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TableCanvasComponent, ControlPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit {
  @ViewChild(TableCanvasComponent) tableCanvasComponent!: TableCanvasComponent;

  constructor(public hashTableService: HashTableService) {}

  ngAfterViewInit() {
    this.hashTableService.setTableCanvasComponent(this.tableCanvasComponent);
  }
}
