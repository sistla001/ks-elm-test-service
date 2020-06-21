import { Component, OnInit } from '@angular/core';
import { KsPlatformService } from 'ks-platform-service';
import { KsRootService } from 'ks-root-service';

@Component({
  selector: 'app-test',
  templateUrl: 'test-service.component.html'
})
export class TestServiceComponent implements OnInit {
  constructor(
    public platformService: KsPlatformService,
    public rootService: KsRootService
  ) {}
  pValue = 0;
  rValue = 0;

  ngOnInit() {}

  updatePlatformValue() {
    let val = this.platformService.getValue();
    val++;
    this.platformService.setValue(val);
  }

  getPlatformValue() {
    this.pValue = this.platformService.getValue();
  }

  updateRootValue() {
    let val = this.rootService.getValue();
    val++;
    this.rootService.setValue(val);
  }

  getRootValue() {
    this.rValue = this.rootService.getValue();
  }

}
