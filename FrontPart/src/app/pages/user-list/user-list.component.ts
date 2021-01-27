import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    users = null;

    constructor(private accountService: UserService) {}

    ngOnInit() {
        this.accountService.getAllUser()
            .pipe(first())
            .subscribe(users => this.users = users);
            
    }

    deleteUser(uid: string) {
        const user = this.users.find(x => x.uid === uid);
        user.isDeleting = true;
        this.accountService.delete(uid)
            .pipe(first())
            .subscribe(() => this.users = this.users.filter(x => x.id !== uid));
    }

}
