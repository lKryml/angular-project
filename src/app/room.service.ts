import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRooms() {
    return this.http.get('/api/rooms');
  }

  addRooms(obj: any) {
    return this.http.post('api/rooms', obj);
  }

  deleteRoom(id: number) {
    return this.http.delete(`api/rooms/${id}`);
  }
}
