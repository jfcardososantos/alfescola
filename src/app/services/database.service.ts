import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private apiUrl = environment.mongoDbUrl + '/api';


  constructor(private http: HttpClient) {}

  schoolCode = environment.schoolCode


  set(collectionName: string, document: any): Observable<any> {
    const dbName = this.schoolCode
    return this.http.post(`${this.apiUrl}/create-document`, { dbName, collectionName, document });
  }

  get(collectionName: string, valorReferencia: string, valorAserEncontrado: string): Observable<any> {
    const dbName = this.schoolCode
    const params = new HttpParams()

      .set('dbName', dbName)
      .set('collectionName', collectionName)
      .set('field', valorReferencia)  // Define o campo de busca
      .set('value', valorAserEncontrado);  // Define o valor de busca

    return this.http.get(`${this.apiUrl}/read-documents`, { params });
  }

  update( collectionName: string, filter: any, update: any): Observable<any> {
    const dbName = this.schoolCode as string
    return this.http.put(`${this.apiUrl}/update-document`, { dbName, collectionName, filter, update });
  }

  updateArray(collectionName: string, filter: any, arrayKey: string, newValues: any[]): Observable<any> {
    const dbName = this.schoolCode as string
    return this.http.put(`${this.apiUrl}/update-array`, { dbName, collectionName, filter, arrayKey, newValues });
  }

  updateObjectInArray(collectionName: string, filter: any, arrayKey: string, objectCriteria: any, update: any): Observable<any> {
    const dbName = this.schoolCode as string
    return this.http.put(`${this.apiUrl}/update-object-in-array`, { dbName, collectionName, filter, arrayKey, objectCriteria, update });
  }


  delete(collectionName: string, filter: any): Observable<any> {
    const dbName = this.schoolCode as string
    return this.http.delete(`${this.apiUrl}/delete-document`, { body: { dbName, collectionName, filter } });
  }

  // Método para enviar a senha e receber o hash
  cryptoPassword(password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/hash-password`, { password });
  }

  // Método para verificar a senha durante o login
  verifyPassword(email: string, password: string): Observable<any> {
    const dbName = this.schoolCode as string
    return this.http.post<any>(`${this.apiUrl}/verify-password`, { dbName, email, password });
  }

  log(systemUserUid: string, systemUser: string, action: string): Observable<any>{
    const now = new Date()

    const logDados = {
      systemUser: systemUser,
      uid: systemUserUid,
      action: action,
      date: now.toISOString()
    }

   return this.set('log', logDados)

  }

}
