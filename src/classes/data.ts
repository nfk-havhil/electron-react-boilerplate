import Elev from './elev';
import Klasse from './klasse';

const hentKlasser = (): Klasse[] => {
  return Array.from(Array(5).keys()).map((i) => {
    const elever: Elev[] = [];
    Array.from(Array(20).keys()).forEach(() => {
      elever.push(new Elev());
    });
    return new Klasse(elever, `Klasse ${i + 1}`);
  });
};
export default hentKlasser;
