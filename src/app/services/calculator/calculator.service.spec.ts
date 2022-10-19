import { TestBed } from '@angular/core/testing';
import { LoggerService } from '../logger/logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;
  //let loggerService: LoggerService;

  //2 We create a dummy Object
  let mockLoggerService: any;

  beforeEach(() => {
    console.log('Calling beforeEach test')
    //1 We create a full Object and we track it
    // with this the LoggerService constructor will be called
    //loggerService = new LoggerService()
    
    // With Spy the log method wont be called
    //spyOn(loggerService, 'log')
    // With this the log method will be called
    //spyOn(loggerService, 'log').and.callThrough()
    
    //service = new CalculatorService(loggerService);

    mockLoggerService = jasmine.createSpyObj('loggerService', ['log'])
    service = new CalculatorService(mockLoggerService);
  });

  it('pending', () => {
    console.log('Calling pending test')
    pending();
  });

  /*
  it(' fail', () => {
    // fail
    fail();
  });
  */

  it('should return 2', () => {
    console.log('Calling service::add test')
    const result = service.add(1,1)
    expect(result).toBe(2);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should return 0', () => {
    console.log('Calling service::subtract test')
    const result = service.subtract(1,1)
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });


});
