import { TFindAccountResponse } from "./dtos/TFindAccountResponse";

export default interface IFindAccount {
  find(email: string): Promise<TFindAccountResponse>
}