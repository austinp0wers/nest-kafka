import { ConsumerService } from './consumer.service';
import { ProducerService } from './producer.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [ProducerService, ConsumerService],
  exports: [ProducerService, ConsumerService],
})
export class KafkaModule {}
