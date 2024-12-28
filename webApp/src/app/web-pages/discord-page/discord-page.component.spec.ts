import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordPageComponent } from './discord-page.component';

describe('DiscordPageComponent', () => {
  let component: DiscordPageComponent;
  let fixture: ComponentFixture<DiscordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
