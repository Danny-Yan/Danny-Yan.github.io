import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordColumnSingleComponent } from './discord-column-single.component';

describe('DiscordColumnSingleComponent', () => {
  let component: DiscordColumnSingleComponent;
  let fixture: ComponentFixture<DiscordColumnSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordColumnSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordColumnSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
