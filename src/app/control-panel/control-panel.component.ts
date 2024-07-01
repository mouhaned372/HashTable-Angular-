import { Component } from '@angular/core';
import {HashTableService} from "../Hashtable";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-control-panel',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './control-panel.component.html',
  styleUrl: './control-panel.component.css'
})
export class ControlPanelComponent {
  key: string = '';
  message: string = '';

  constructor(private hashTableService: HashTableService) {}

  addKey(): void {
    this.hashTableService.add(this.key);
    this.message = ` " ${this.key} " is Added `;
    this.key = '';
  }

  removeKey(): void {
    this.hashTableService.remove(this.key);
    this.message = `" ${this.key} " is Removed`;
    this.key = '';

  }

  checkKey(): void {
    const contains = this.hashTableService.contains(this.key);
    this.message = contains ? `The HashTable contains : " ${this.key} "` : `The HashTable does not contain : " ${this.key} "`;
    this.key = '';
  }

  displayTable(): void {
    window.location.reload();
  }

  getTableSize(): void {
    this.message = `The HashTable size: " ${this.hashTableService.getTableSize()} "`;
  }
}
