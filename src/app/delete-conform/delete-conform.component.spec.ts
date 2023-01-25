import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConformComponent } from './delete-conform.component';

describe('DeleteConformComponent', () => {
  let component: DeleteConformComponent;
  let fixture: ComponentFixture<DeleteConformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteConformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteConformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
