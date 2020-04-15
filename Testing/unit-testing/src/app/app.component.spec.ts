import { UserService } from './services/user.service';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testing'`, () => {
    expect(app.title).toEqual('testing');
  });

  it('should the name is houari', () => {
    expect(app.name).toBe('houari');
  });

  it('h1 should contain the name', () => {
    let h1 = fixture.debugElement.nativeElement.querySelector('h1').textContent
    expect(h1).toContain(app.name)
  })

  // Test data get it from server
  it('Should the name is mohamed', async(() => { // when all Async tasks complete execute this test
    // we can add spy, make fake service :D
    let userSer = fixture.debugElement.injector.get(UserService)
    spyOn(userSer, 'getName').and.returnValue(Promise.resolve('mohamed'))

    fixture.whenStable().then(() => { 
      expect(app.name2).toBe('mohamed');
    });

  }));
});
