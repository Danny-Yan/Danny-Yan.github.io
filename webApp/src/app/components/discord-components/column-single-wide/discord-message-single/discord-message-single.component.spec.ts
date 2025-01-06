import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordMessageSingleComponent } from './discord-message-single.component';

describe('DiscordMessageSingleComponent', () => {
  let component: DiscordMessageSingleComponent;
  let fixture: ComponentFixture<DiscordMessageSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordMessageSingleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordMessageSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
