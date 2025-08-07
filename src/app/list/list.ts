import { Component } from '@angular/core';
import { Service } from '../service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [CommonModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  constructor(private service: Service) {}
  items: any = [];
  ngOnInit() {
    this.service.getAll().subscribe({
      next: (data: any) => {
        console.log(data);
        this.items = data;
      },
    });
  }
}
