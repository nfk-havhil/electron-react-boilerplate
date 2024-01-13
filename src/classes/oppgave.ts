export default class Oppgave {
  navn: string;
  poeng: number;

  constructor(navn: string, poeng: number = 1) {
    this.navn = navn;
    this.poeng = poeng;
  }
}
