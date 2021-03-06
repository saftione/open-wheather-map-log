
  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http';
  import { environment } from '../../environments/environment';
  const baseUrl = `${environment.API_URL}/api/weathers`;
@Injectable({
  providedIn: 'root'
})
export class WeatherService {



    constructor(private http: HttpClient) { }

    getAll(place) {
      return this.http.get(`${baseUrl}?place=${place}`);
    }

    get(id) {
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data) {
      return this.http.post(baseUrl, data);
    }

    update(id, data) {
      return this.http.put(`${baseUrl}/${id}`, data);
    }

    delete(id) {
      return this.http.delete(`${baseUrl}/${id}`);
    }

    deleteAll() {
      return this.http.delete(baseUrl);
    }

    findByTitle(title) {
      return this.http.get(`${baseUrl}?title=${title}`);
    }
  }
