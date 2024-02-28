import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';
import { Room } from '../Room';
import { take } from 'rxjs';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  rooms = [] as Room[];
  roomObj: Room = {
    roomNumber: '1',
    roomType: 'Deluxe Room',
    amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
    price: 500,
    photos:
      'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021'),
    rating: 4.5,
  };
  constructor(private roomService: RoomService) {}

  deleteRoom(id: string): void {
    this.roomService.deleteRoom(id).subscribe({
      next: (data) => {
        this.rooms = this.rooms.filter((r) => r.roomNumber !== id);
        console.log(data);
      },
      error: (err) => {
        console.error('Error deleting room:', err);
      },
    });
  }

  ngOnInit(): void {
    this.roomService
      .getRooms()
      .pipe(take(1))
      .subscribe((val) => {
        this.rooms = val;
        console.log(val);
      });
  }

  createUser(roomObj: Room): void {
    this.roomService
      .addRooms(roomObj)
      .pipe(take(1))
      .subscribe((val) => {
        console.log(val);
        this.rooms.push(roomObj);
      });
  }
}
