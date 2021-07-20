import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { AccountService } from 'src/app/_services/account.service';
import { MembersService } from 'src/app/_services/members.service';
import { Member } from '../../_model/member';
import { User } from '../../_model/user';
import { take } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editProfile') editProfile: NgForm;
  member: Member;
  user: User;
  @HostListener('window:beforeunload', ['$event']) unloadNotification($event: any) {
    if (this.editProfile.dirty) {
      $event.returnValue = true;
     }
  }

  constructor(private accountService: AccountService, private membersService: MembersService,
              private toaster: ToastrService) { 
    this.accountService.currentUser$.pipe(take(1)).subscribe(user => this.user = user);
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.membersService.getMember(this.user.username).subscribe(member => {
      this.member = member
    });
  }

  updateMember() {
    this.membersService.updateMember(this.member).subscribe(() => {
      this.toaster.success('Profile updated successfully');
      this.editProfile.reset(this.member);
    });
  }

}
