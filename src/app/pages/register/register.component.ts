import { Component, inject } from '@angular/core';
import { AuthFormComponent } from '../../components/auth-form/auth-form.component';
import { ProductService } from '../../services/product.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthService, User } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [AuthFormComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  authService = inject(AuthService);
  toast = inject(HotToastService);
  router = inject(Router);

  handleSubmit(values: User) {
    this.authService.registerUser(values).subscribe({
      next: () => {
        this.toast.success('Done');
        this.router.navigateByUrl('/login');
      },
      error: () => this.toast.error('Error'),
    });
  }
}
