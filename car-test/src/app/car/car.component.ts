import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carData: any = '';
  cars = [
    {
      brand: 'Audi',
      image: 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
      description:'Audi AG is a German automobile manufacturer that designs, engineers, produces, markets and distributes luxury vehicles. Audi is a member of the Volkswagen Group and has its roots at Ingolstadt, Bavaria, Germany. Audi-branded vehicles are produced in nine production facilities worldwide'
    },
    {
      brand: 'Mercedes',
      image: 'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381__340.jpg',
      description:'Mercedes-Benz is a German global automobile marque and a division of Daimler AG. The brand is known for luxury vehicles, buses, coaches, and trucks. The headquarters is in Stuttgart, Baden-Württemberg. The name first appeared in 1926 under Daimler-Benz'
    },
    {
      brand: 'BMW',
      image: 'https://cdn.pixabay.com/photo/2013/07/13/11/48/bmw-158703__340.png',
      description:'BMW took the stage at the 2018 Auto Expo with the i3s and i8 Roadster. The Roadster will be officially launched in India and will join the i8 as BMW’s halo product in the country. Based on the i8 Spyder Concept of 2012, the drop-top i8 was first showcased at the 2017 Los Angeles Motor Show.'
    },
    {
      brand: 'Jaguar',
      image: 'https://cdn.pixabay.com/photo/2015/09/12/21/31/car-937414__340.png',
      description:'Jaguar is the luxury vehicle brand of Jaguar Land Rover, a British multinational car manufacturer with its headquarters in Whitley, Coventry, England.'
    },
    {
      brand: 'Bugatti',
      image: 'https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439__340.png',
      description:'Bugatti cars price starts at Rs. 19.21 crore for the cheapest car Chiron and goes up to Rs. 41.00 crore for the top model Bugatti Divo. ... Divo (Rs. 41.00 crore), Chiron (Rs. 19.21 crore) and are among the popular cars from Bugatti'
    }
  ]

  sendCar(car) {
     this.carData = car;
  }

  constructor() { }
  ngOnInit() {
  }

}
