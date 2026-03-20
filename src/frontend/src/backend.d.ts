import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface CarrierSignup {
    workEmail: string;
    mcOrUsdotNumber: string;
    companyName: string;
    phoneNumber: string;
    hiringNeeds: string;
    fleetSize: bigint;
}
export interface backendInterface {
    getAllCarrierSignups(): Promise<Array<CarrierSignup>>;
    submitCarrierSignup(companyName: string, workEmail: string, phoneNumber: string, mcOrUsdotNumber: string, fleetSize: bigint, hiringNeeds: string): Promise<void>;
}
