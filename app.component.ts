import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'nom-du-projet';
  inputText: string = '';
  textList: string[] = []; 
  colors: string[] = ['red', 'blue', 'green', 'orange', 'purple'];
  buttonLabel="Random";
  random=false;
  sortState: 'asc' | 'desc' | 'random' = 'asc';
  sortButtonLabel: string = 'Sort Descending';
  showText() {
    console.log(this.inputText);
  }
  showMessage() {
    console.log('Bonjour');
}
addTextToList() {
  if (this.inputText) {
    this.textList.push(this.inputText); 
    this.inputText = '';  
  }
}
removeLastText() {
  if (this.textList.length > 0) {
    this.textList.pop();
  }}
  toggleRandomColoring() {
    this.random = !this.random;
    this.buttonLabel = this.random ? 'Cycle' : 'Random';
  }
  getColor(index: number): string 
  {
    if (this.random)
    {return this.colors[Math.floor(Math.random() * this.colors.length)];}
    else
    {return this.colors[index % this.colors.length];}
  }
  toggleSorting() {
    if (this.sortState === 'asc') {
      this.sortState = 'desc';
      this.textList.sort((a, b) => b.localeCompare(a));
      this.sortButtonLabel = 'Sort Random';
    } else if (this.sortState === 'desc') {
      this.sortState = 'random';
      this.textList.sort(() => Math.random() - 0.5);
      this.sortButtonLabel = 'Sort Ascending';
    } else {
      this.sortState = 'asc';
      this.textList.sort((a, b) => a.localeCompare(b));
      this.sortButtonLabel = 'Sort Descending';
    }
  }
}



