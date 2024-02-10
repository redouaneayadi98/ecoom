import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  users:User[]=[]
  authenticated:User | undefined

  constructor(private router:Router) {
    this.users.push(
      {id:1,name:"user1",password:"1234",roles:["USER"]},
      {id:1,name:"user2",password:"5678",roles:["USER"]},
      {id:1,name:"admin",password:"9999",roles:["USER","ADMIN"]},
    )
  }

  login(name:string,password:string):Observable<User>{

    let user=this.users.find(u=>u.name==name)

    if(user==undefined)
      return throwError(()=>new Error("Bad credentials"))

    else if(user.password!=password)
      return throwError(()=>new Error("Bad credentials"))

    else
      this.authenticated=user
      return of(user)
  }

  authenticateUser(user:User):Observable<boolean>{
    this.authenticated=user
    return of(true)
  }

  isAuthenticated():boolean{
    return this.authenticated!=undefined
  }

  hasRole(role:string):boolean{
    return this.authenticated!.roles.includes(role)
  }

  logOut():boolean{
    this.authenticated=undefined
    this.router.navigateByUrl("/login")
    return true
  }

}
