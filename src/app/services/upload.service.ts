import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import Compressor from 'compressorjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = environment.filesZiplineUrl;

  authToken = environment.filesZiplineKey

  constructor(private http: HttpClient) { }

  compressFile(file: File): Promise<File> {
    return new Promise((resolve, reject) => {
      new Compressor(file, {
        quality: 0.5,
        success: (compressedFile: any) => resolve(compressedFile),
        error: (err) => reject(err),
      });
    });
  }


  uploadFile(files: File | File[]): Observable<any> {
    const formData = new FormData();

    const isArray = Array.isArray(files);

    if (isArray) {
      const filePromises = (files as File[]).map(async (file, index) => {
        const isImage = file.type.startsWith('image/');
        let processedFile = file;

        if (isImage) {
          processedFile = await this.compressFile(file);
        }

        formData.append('files', processedFile, `file-${index}`);
      });

      // Aguarda a compressão de todas as imagens antes de enviar os arquivos
      return from(Promise.all(filePromises).then(() => {
        formData.append('expiresAt', '2199-01-01T00:00:00.000Z');
        formData.append('removed_gps', 'true');

        const headers = new HttpHeaders({
          'Authorization': this.authToken
        });

        return this.http.post<any>(this.apiUrl, formData, { headers }).toPromise();
      }));

    } else {
      const file = files as File;
      const isImage = file.type.startsWith('image/');
      let processedFile = file;

      if (isImage) {
        // Compressão de imagem
        return from(this.compressFile(file).then(compressedFile => {
          processedFile = compressedFile;

          formData.append('file', processedFile, processedFile.name);
          formData.append('expiresAt', '2199-01-01T00:00:00.000Z');
          formData.append('removed_gps', 'true');

          const headers = new HttpHeaders({
            'Authorization': this.authToken
          });

          return this.http.post<any>(this.apiUrl, formData, { headers }).toPromise();
        }));
      } else {
        formData.append('file', file, file.name);
        formData.append('expiresAt', '2199-01-01T00:00:00.000Z');
        formData.append('removed_gps', 'true');

        const headers = new HttpHeaders({
          'Authorization': this.authToken
        });

        return this.http.post<any>(this.apiUrl, formData, { headers });
      }
    }
  }


}
