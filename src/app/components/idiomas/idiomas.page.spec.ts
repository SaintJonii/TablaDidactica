import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IdiomasPage } from './idiomas.page';

describe('IdiomasPage', () => {
  let component: IdiomasPage;
  let fixture: ComponentFixture<IdiomasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdiomasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IdiomasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
