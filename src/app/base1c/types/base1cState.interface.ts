import {Base1cInterface} from '../../users/types/base1cInterface';


export interface Base1cStateInterface {
  isSubmittingGetAllBase1c: boolean;
  isLoggedInGetAllBase1c: boolean | null;
  base1cList: Base1cInterface[] | null;
}
