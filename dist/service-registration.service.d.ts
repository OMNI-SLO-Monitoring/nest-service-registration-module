export interface Registration {
    id: string;
    name: string;
}
export declare class ServiceRegistration {
    private SERVICE_REGISTRATION_DIR;
    readRegistration(): Promise<Registration>;
    writeRegistration(registration: Registration): void;
}
//# sourceMappingURL=service-registration.service.d.ts.map