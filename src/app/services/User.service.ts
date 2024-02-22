import { Injectable } from '@angular/core';
import { DataSnapshot, Database, onValue, ref, set } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public database : Database) { }

  createUser(){
    return
    set(ref(this.database,'Users/' + 19363084),{
      userName:'Guillermo Velasquez Velasquez',
      FirstName: 'Memomojica',
      PicturePortfolio: 'https://cdn.pixabay.com/photo/2015/01/27/09/58/man-613601_1280.jpg'
    })

  }

  getUser(){
    const users = ref(this.database,'User/' + 1019027817);
    onValue(users,(DataSnapshot) => { 
      const data = DataSnapshot.val();
      console.log(data)
    })
  }
  


}
