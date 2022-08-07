import { MeteringPointEntityInterface } from './meteringPointEntityInterface';

export interface PSubscriberEntityInterface {
  lsProm: string;
  subdivision: string;
  numContract: string;
  nameProm: string;
  addressProm: string;
  rniProm: string;
  innPom: string;
  departmentProm: string;
  rsProm: string;
  telProm: string;
  dateUpdate: string;
  meteringPoints: MeteringPointEntityInterface[];
}
