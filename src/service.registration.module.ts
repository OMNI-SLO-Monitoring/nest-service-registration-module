import { Module } from '@nestjs/common';
import { ServiceRegistration } from './service-registration.service';
import { ServiceRegistrationController } from './service-registration.controller';

@Module({
    imports: [],
    controllers: [ServiceRegistrationController],
    providers: [ServiceRegistration],
    exports: [ServiceRegistration]
})
export class ServiceRegistrationModule {}