import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacaoDetailComponent } from './publicacao-detail.component';

describe('PublicacaoDetailComponent', () => {
  let component: PublicacaoDetailComponent;
  let fixture: ComponentFixture<PublicacaoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicacaoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicacaoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
