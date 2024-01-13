export default class Elev {
  navn: string;
  id: string;

  constructor(navn?: string) {
    this.id = this.generateRandomId();
    this.navn = navn || this.id;
  }

  generateRandomId = (): string => {
    return Math.random().toString(36).substring(2, 10);
  };
}
