import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// importamos los modulos que estamos usando
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireModule} from 'angularfire2';
import {CursoService} from './services/curso.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AddCursosComponent } from './components/add-cursos/add-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CursosComponent,
    AddCursosComponent
  ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'demente-web')
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
