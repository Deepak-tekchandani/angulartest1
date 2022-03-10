import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-user',
  template: `
    <h1 class="custom">
      student-user works!
</h1>
  `,
  styles: [
    ".custom{color:red}"
  ]
})
export class StudentUserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
