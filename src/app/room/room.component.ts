import { Component, OnInit } from '@angular/core';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent implements OnInit {
  rooms: Room[];
  constructor(private roomService: RoomService) {}

  deleteRoom(id: string) {
    if (!id) return;
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
