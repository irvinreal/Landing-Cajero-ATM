import { map } from "nanostores";

interface Client {
  clientName: string
  amount: number
}

const INITIAL_STATE = {
  clientName: '',
  amount: 0,
}

export const clientState = map<Client>(INITIAL_STATE)

