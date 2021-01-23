import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users = null;

    constructor(private accountService: FormService) {}

    ngOnInit() {
        this.accountService.getAllUser()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        const user = this.users.find(x => x.id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== id));
    }

}
