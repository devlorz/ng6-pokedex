import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent implements OnInit {
  @Output()
  homeBtnClick = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onHomeBtnClick() {
    this.homeBtnClick.emit();
  }
}
