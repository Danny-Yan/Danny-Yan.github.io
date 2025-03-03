import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscordColumnComponent } from './discord-column.component';

describe('DiscordColumnComponent', () => {
  let component: DiscordColumnComponent;
  let fixture: ComponentFixture<DiscordColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscordColumnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscordColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
