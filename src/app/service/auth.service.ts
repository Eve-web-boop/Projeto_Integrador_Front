import { Injectable } from '@angular/core';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/Usuario';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private http: HttpClient
  ) { }


entrar(userLogin: UsuarioLogin): Observable<UsuarioLogin>{
  return this.http.post<UsuarioLogin>('https://redetec.herokuapp.com/usuarios/logar', userLogin)
}

cadastrar(user: Usuario): Observable<Usuario>{
  return this.http.post<Usuario>('https://redetec.herokuapp.com/usuarios/cadastrar', user)
}

logado(){
  let ok = false

  if(environment.token !=''){
    ok = true
  }

  return ok
}

}
