import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventThumbnailComponent } from './event-thumbnail.component';

describe('EventThumbnailComponent', () => {
  let component: EventThumbnailComponent;
  let fixture: ComponentFixture<EventThumbnailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventThumbnailComponent]
    });
    fixture = TestBed.createComponent(EventThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
