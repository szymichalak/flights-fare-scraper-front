import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { AppEffects } from 'src/core/store/effects/app.effects';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from 'src/core/store/reducers/app.reducer';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SidebarNavigatorComponent } from './layout/sidebar-navigator/sidebar-navigator.component';
import { HomeComponent } from './views/home/home.component';
import { SettingsComponent } from './views/settings/settings.component';
import { CustomDropdownComponent } from './other-components/custom-dropdown/custom-dropdown.component';
import { CounterComponent } from './other-components/counter/counter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarNavigatorComponent,
    HomeComponent,
    SettingsComponent,
    CustomDropdownComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({app: appReducer}),
    EffectsModule.forRoot([AppEffects]),
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
