import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeItemComponent } from './home-item.component';
import { MatCard, MatCardActions, MatCardContent, MatCardHeader } from '@angular/material/card';
import { MockComponent } from 'ng-mocks';
import { HomeItem } from 'src/app/interfaces/homeitem';

describe('HomeItemComponent', () => {
  let component: HomeItemComponent;
  let fixture: ComponentFixture<HomeItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeItemComponent,
        MatCard,
        MatCardHeader,
        MatCardContent,
        MatCardActions,
      ]
    });
    fixture = TestBed.createComponent(HomeItemComponent);
    component = fixture.componentInstance;
    var expectedHomeItem: HomeItem = { title: "Test", imageSource: "Test", leftImage: false, description: "Test" }
    component.homeItem = expectedHomeItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.homeItem.title).toEqual("Test");
  });
});
