import Elev from './elev';
import Prove from './prove';

export default class Klasse {
  navn: string;
  id: string;
  elever: Elev[];
  prover: Prove[] = [];

  constructor(elever: Elev[], navn?: string) {
    this.id = this.generateRandomId();
    this.navn = navn || this.id;
    this.elever = elever;
  }

  generateRandomId = (): string => {
    return Math.random().toString(36).substring(2, 10);
  };
}
