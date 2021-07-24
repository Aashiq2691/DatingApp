import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-break',
  templateUrl: './break.component.html',
  styleUrls: ['./break.component.css']
})
export class BreakComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.toastr.info('You have been online for 20 minutes', 'Take a break', {
        closeButton: true,
        extendedTimeOut: 5000,
        timeOut: 10000
      });
    }, 1200000)
  }

}
