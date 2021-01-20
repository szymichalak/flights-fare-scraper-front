import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Language } from 'src/app/enums/language-enum';
import { SetLanguage } from 'src/core/store/actions/app.actions';
import { getLanguage } from 'src/core/store/selectors/app.selectors';
import { IAppState } from 'src/core/store/state/app.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _store: Store<IAppState>) { }

  language: Language | undefined;

  ngOnInit(): void {
    this._store
    .pipe(select(getLanguage))
    .subscribe((language: Language | null) => {
      if (language) {
        console.log(language);
      }
    });

  }

  changeLanguage(){
    if (this.language == Language.pl) {
      this.language = Language.en;
    } else {
      this.language = Language.pl;
    }
    this._store.dispatch(new SetLanguage({language: this.language}));
  }



  dropdown_labels = ['aa', 'bb', 'cc'];
  default_label = 'xxx';

  optionClicked(event: any){
    console.log(event);
  }

}
