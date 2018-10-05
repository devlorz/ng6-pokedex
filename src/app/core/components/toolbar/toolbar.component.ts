import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarComponent implements OnInit {
  @Output()
  homeBtnClick = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onHomeBtnClick() {
    this.homeBtnClick.emit();
  }
}
