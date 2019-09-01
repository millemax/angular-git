import { Injectable } from '@angular/core';
// importamos los modulos de firestore, el models que creamos y el observable.
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {CursoInterface} from '../models/cursointerface';
import {observable, Observable} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CursoService {

  cursosCollection: AngularFirestoreCollection<CursoInterface>;
  cursos: Observable<CursoInterface[]>;
  cursoDoc:AngularFirestoreDocument<CursoInterface>;


  constructor( public afs:AngularFirestore) { 
    // obtenemos la collection de firestore.
    this.cursos = afs.collection('cursos').valueChanges();

   }

   getCursos(){
      return this.cursos;
   }
}
