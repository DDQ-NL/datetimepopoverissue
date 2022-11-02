import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  @Input() type: string;
  isLoading = false;
  dateTo: Date;
  dateFrom: Date;

  //note that to use the date selector in ionic the values have to be STRINGS!
  dateToString: string;
  dateFromString: string;

  minDateAll: string;
  maxDateAll: string;
  maxDate: string;
  minDate: string;

  //define various arrays for the different results (filtered/unfiltered, leiden only, all data etc)

  constructor() { }

  ngOnInit() {}

}
