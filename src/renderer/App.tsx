import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '@navikt/ds-css';
import { Page, Box } from '@navikt/ds-react';
import './App.css';
import Klasser from './Klasser';

export default function App() {
  return (
    <Page>
      <Box background="surface-alt-3-strong" padding="2" as="header">
        <Page.Block gutters width="lg">
          Header
        </Page.Block>
      </Box>
      <Box background="bg-default" padding="2" paddingBlock="4" as="main">
        <Page.Block gutters width="lg">
          <Router>
            <Routes>
              <Route path="/" element={<Klasser />} />
            </Routes>
          </Router>
        </Page.Block>
      </Box>
    </Page>
  );
}
