import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  rooms: any;
  constructor(private roomService: RoomService) {}

  deleteRoom(id: any) {
    this.roomService.deleteRoom(id).subscribe((data) => {
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.roomService.getRooms().subscribe((val) => {
      this.rooms = val;
      console.log(val);
    });
  }
}
