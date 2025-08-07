import { Component } from '@angular/core';
import { Service } from '../service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterLink],
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

  onDelete(id: any) {
    this.service.delete(id).subscribe({
      next: () => {
        this.items = this.items.filter((item: any) => item.id != id);
      },
    });
  }
}
