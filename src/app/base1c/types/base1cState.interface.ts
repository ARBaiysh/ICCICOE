import { Base1cInterface } from '../../users/types/base1cInterface';
import { PSubscriberInterface } from './pSubscriber.interface';
import { PSubscriberEntityInterface } from './pSubscriberEntity.interface';


export interface Base1cStateInterface {
  isSubmittingGetAllBase1c: boolean;
  isLoggedInGetAllBase1c: boolean | null;
  base1cList: Base1cInterface[] | null;

  isSubmittingGetPSubscribers: boolean;
  isLoggedInGetPSubscribers: boolean | null;
  pSubscriberList: PSubscriberInterface[] | [];

  isSubmittingGetPSubscriber: boolean;
  isLoggedInGetPSubscriber: boolean | null;
  pSubscriber: PSubscriberEntityInterface | null;
}
