import { Injectable } from '@angular/core';
import { TableCanvasComponent } from './table-canvas/table-canvas.component';

@Injectable({
  providedIn: 'root'
})
export class HashTableService {

  // @ts-ignore
  tableSize: number = parseInt(prompt("Give Me The Size of The HashTable:"));


  private table: Array<string>[] = new Array(this.tableSize).fill(null).map(() => []);

  private tableCanvasComponent!: TableCanvasComponent;

  setTableCanvasComponent(tableCanvasComponent: TableCanvasComponent) {
    this.tableCanvasComponent = tableCanvasComponent;
  }

  hashFunction(key: string): number {
    let hashValue = 0;
    for (let i = 0; i < key.length; i++) {
      hashValue = (hashValue + key.charCodeAt(i)) * 31;
    }
    return Math.abs(hashValue % this.tableSize);
  }

  add(key: string): void {
    const index = this.hashFunction(key);
    if (!this.table[index].includes(key)) {
      this.tableCanvasComponent.startAnimation(key, index);
    }

  }

  remove(key: string): void {
    const index = this.hashFunction(key);
    const list = this.table[index];
    const lastIndex = list.lastIndexOf(key);
    if (this.table[index].includes(key)) {
      this.table[index].splice(lastIndex,1)
      const tbl:number = this.table[index].length ;
      for(let i=0 ; i<10;i++)
      {
        for(let j=0;j<tbl;j++){
        this.tableCanvasComponent.startAnimation(this.table[index][j], index);
      }
      }
    }

  }

  contains(key: string): boolean {
    const index = this.hashFunction(key);
    return this.table[index].includes(key);
  }

  getTableSize(): number {
    return this.table.reduce((sum, bucket) => sum + bucket.length, 0);
  }

  getTable(): Array<string>[] {
    return this.table;
  }
}
