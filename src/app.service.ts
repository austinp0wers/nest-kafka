import { ProducerService } from './kafka/producer.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}

  async getHello() {
    await this.producerService.produce({
      topic: 'kafka-test',
      messages: [
        {
          key: 'key1',
          value: 'first partition producer',
        },
      ],
    });

    await this.producerService.produce({
      topic: 'kafka-test',
      messages: [
        {
          key: 'key2',
          value: 'second partition producer',
        },
      ],
    });
    return 'Hello World!';
  }
}
