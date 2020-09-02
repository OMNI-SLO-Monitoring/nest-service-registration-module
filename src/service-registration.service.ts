import { Injectable } from "@nestjs/common";
import * as fs from 'fs';

export interface Registration {
    id: string;
    name: string;
}

@Injectable()
export class ServiceRegistration {

    private SERVICE_REGISTRATION_DIR: string = "service-registration.json";

    readRegistration(): Promise<Registration> {
        return new Promise((res, rej) => {
            fs.readFile(this.SERVICE_REGISTRATION_DIR, (err, data) => {
                if (err) rej(err);
                const registration = JSON.parse(data.toString()) as Registration;
                res(registration);
            })
        })
    }

    writeRegistration(registration: Registration) {
        fs.writeFileSync(this.SERVICE_REGISTRATION_DIR, JSON.stringify(registration));
    }

}