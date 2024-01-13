import { Accordion } from '@navikt/ds-react';
import hentKlasser from '../classes/data';

function Klasser() {
  const klasser = hentKlasser();

  return (
    <Accordion>
      {klasser.map((klasse) => {
        return (
          <Accordion.Item>
            <Accordion.Header>{klasse.navn}</Accordion.Header>
            <Accordion.Content>
              {klasse.elever.map((elev) => {
                return <div>{elev.navn}</div>;
              })}
            </Accordion.Content>
          </Accordion.Item>
        );
      })}
    </Accordion>
  );
}

export default Klasser;
