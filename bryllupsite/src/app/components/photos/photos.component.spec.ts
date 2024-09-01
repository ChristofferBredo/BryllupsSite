import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotosComponent } from './photos.component';
import { MatCard, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MatDivider } from '@angular/material/divider';

describe('PhotosComponent', () => {
  let component: PhotosComponent;
  let fixture: ComponentFixture<PhotosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhotosComponent, MatCard, MatCardHeader, MatCardContent, MatDivider]
    });
    fixture = TestBed.createComponent(PhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
