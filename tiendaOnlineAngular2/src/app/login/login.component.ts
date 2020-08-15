import { Component, OnInit } from '@angular/core';
import { LoginService } from "../services/login.service";
import { Response } from "@angular/http";
import { Router } from "@angular/router";

@Component({
  selector: 'c-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensaje:string; //Variable error de tipo srting

  constructor(private loginService : LoginService, private router: Router) { }

  ngOnInit() {
  }

  iniciarSesion(user:string, password:string){
    this.loginService.login().subscribe(
      (data: Response) =>{
        var usuarios = JSON.parse(JSON.stringify(data));
        var validacion = false;
        usuarios.forEach((usr) => {
          if(usr.correo == user && usr.contrasena == password) {
            this.mensaje = 'Ingresando...';
            validacion = true;
          }
        });
        
        validacion ? this.router.navigate(['principal']) : this.mensaje = 'Datos incorrectos, intente de nuevo \n\n Usuario: rodolfopuc@gmail.com   Contraseña: RodolfoPuc';
      }

    )

  }
}
