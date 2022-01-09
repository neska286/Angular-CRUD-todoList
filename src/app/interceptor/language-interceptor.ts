import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } 
from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LanguageInterceptor implements HttpInterceptor {

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
  
    const lang = localStorage.getItem('lang') || 'en';
        req = req.clone({ 
            setHeaders : {
            'Accept-Language': lang
        } 
    });
    return next.handle(req);
 }
}