import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Room } from './Room';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getRooms(): Observable<Room[]> {
    return this.http.get<Room[]>('/api/rooms');
  }

  addRooms(room: Room) {
    return this.http.post('api/rooms', room);
  }

  deleteRoom(id: string) {
    return this.http.delete(`api/rooms/${id}`);
  }
}
