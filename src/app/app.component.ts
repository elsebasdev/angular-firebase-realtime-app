import { Component, inject } from '@angular/core';
import { Database,onValue,ref,set, update,get } from '@angular/fire/database';
import { remove } from 'firebase/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-firebase-realtime-app';
  public items!:Observable<any[]>;

  constructor(public database : Database){

    //? metdo traer uno */
    const user = ref(this.database,'Users/' + 123456789);
    onValue(user,(DataSnapshot) => { 
      const data = DataSnapshot.val();
      console.log(data)
    })

    //? metodo traer todos */
    const users = ref(this.database,'Users/');
    onValue(users,(DataSnapshot) => { 
      const data = DataSnapshot.val();
      console.log(data)
    })
    //*? metodo crear */
    // set(ref(this.database,'Users/' + 123456789),{
    //   Id:123456789,
    //   UserName:'Rosario Carranza',
    //   FirstName: 'Rosario.caro',
    //   PicturePortfolio: 'https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg',
    //   RegistrationDate: new Date().toJSON(),
    //   Age: 60
    // })
    //*? metodo update */
    // update(ref(this.database,'Users/' + 123456789),{
    //   userName:'Rosario Carranza',
    //   FirstName: 'Rosario.caro',
    //   PicturePortfolio: 'https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg',
    //   RegistrationDate: new Date().toJSON(),
    //   Age: 60
    // })

    //*? metodo remove */
    // remove(ref(this.database,'Users/' + 123456789));



  }



}
