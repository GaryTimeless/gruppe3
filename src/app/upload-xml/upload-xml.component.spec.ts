import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadXMLComponent } from './upload-xml.component';

describe('UploadXMLComponent', () => {
  let component: UploadXMLComponent;
  let fixture: ComponentFixture<UploadXMLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadXMLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadXMLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
