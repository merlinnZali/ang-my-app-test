import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private loggerService: LoggerService) { }

  add(n1: number, n2:number): number {
    this.loggerService.log(`Adding ${n1} to ${n2}`)
    return n1 + n2
  }

  subtract(n1: number, n2:number): number {
    this.loggerService.log(`Subtract ${n1} to ${n2}`)
    return n1 - n2
  }

}
