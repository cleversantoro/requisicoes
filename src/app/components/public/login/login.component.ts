import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email!: string;
  senha!: string;
  mensagem!: string;
  emailEnviado!: boolean;

  constructor(
    private	authServ:	AuthenticationService,
    private	router:	Router)
    { }

  ngOnInit(): void {
  }

  vscode://vscode.github-authentication/did-authenticate?windowid=1&code=6f66d0507795818f3181&state=81c9a106-53ce-4b02-ba86-947f6f322259yyy

}
