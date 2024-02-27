import { Component } from '@angular/core';
import { RoomService } from './room.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-project';

  constructor() {}
  // this.roomService
  //     .addRooms({
  //       roomNumber: 1,
  //       roomType: 'Deluxe Room',
  //       amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
  //       price: 500,
  //       photos:
  //         'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  //       checkinTime: new Date('11-Nov-2021'),
  //       checkoutTime: new Date('12-Nov-2021'),
  //       rating: 4.5,
  //     })
  //     .subscribe((val) => {
  //       console.log(val);
  //     });
}
