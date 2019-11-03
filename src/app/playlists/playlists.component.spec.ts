import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongListsComponent } from './playlists.component';

describe('SongListsComponent', () => {
  let component: SongListsComponent;
  let fixture: ComponentFixture<SongListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
