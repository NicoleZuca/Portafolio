import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

/*@Injectable({
  providedIn: 'root'
})
export class VigilanteGuard implements CanActivate { //protectores de rutas dan permisos o deniegan permisos de acceso

  constructor(private cookieService: CookieService, private router: Router) {

  }

  redirect(flag: boolean): any {
    if (!flag) {
      this.router.navigate(['/', 'login']) //si retorna un false lo redirecciona a la pantalla de login para que el usuario vuelva a logearse
    }
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const cookie = this.cookieService.check('token_access'); //verificar que la cookie existe 
    this.redirect(cookie) //va a retornar un true o false acerca de la cookie
    return cookie
  }

}*/
