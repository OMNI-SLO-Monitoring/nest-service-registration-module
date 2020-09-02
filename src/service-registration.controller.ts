import { Controller, Post, Body } from '@nestjs/common';
import { ServiceRegistration, Registration } from './service-registration.service';

@Controller('service-registration')
export class ServiceRegistrationController {

    constructor(private registration: ServiceRegistration) {}

    @Post()
    async serviceRegistration(@Body() body: Registration) {
        this.registration.writeRegistration(body)
        console.log(await this.registration.readRegistration())
        return true;
    }
}
