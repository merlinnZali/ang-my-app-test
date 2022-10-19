
import { LoggerService } from '../logger/logger.service';

describe('LoggerService', () => {
  
  let loggerService: LoggerService;

  beforeEach(() => {
    
    loggerService = new LoggerService()

    spyOn(loggerService, 'clear').and.callThrough()

  });


  it('Should clear messages', () => {
    loggerService.messages = ['message1', 'message2']
    loggerService.clear()
    expect(loggerService.messages).toHaveSize(0);
    expect(loggerService.clear).toHaveBeenCalledTimes(1);
  });

  it('should add messages', () => {
    loggerService.log('message test')
    expect(loggerService.messages).toHaveSize(1);
  });


});
