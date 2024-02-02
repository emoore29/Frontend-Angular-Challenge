import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryKnowledgeCardComponent } from './secondary-knowledge-card.component';

describe('SecondaryKnowledgeCardComponent', () => {
  let component: SecondaryKnowledgeCardComponent;
  let fixture: ComponentFixture<SecondaryKnowledgeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryKnowledgeCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondaryKnowledgeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
