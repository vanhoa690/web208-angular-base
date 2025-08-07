import { Component } from '@angular/core';
import { Service } from '../service';
import { ToastService } from '../toast.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {
  items: any = [];
  constructor(private service: Service, private toast: ToastService) {}
  ngOnInit() {
    // ... call api
    this.service.getAll().subscribe({
      next: (data) => {
        console.log(data);
        this.items = data;
      },
    });
  }

  onDelete(id: any) {
    if (window.confirm('Xoa')) {
      this.service.delete(id).subscribe({
        next: () => {
          this.items = this.items.filter((item: any) => item.id != id);
          this.toast.success('ok');
        },
      });
    }
  }
}
