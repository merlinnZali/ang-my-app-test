import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  messages: string[] = []

  constructor() { 
    //debugger
    //logic here
  }

  public log(message: string){
    //debugger
    this.messages.push(message)
    // Push messages to third party
  }

  public clear(){
    //debugger
    this.messages = []
  }
}
