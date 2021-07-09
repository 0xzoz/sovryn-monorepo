import * as React from 'react';
import { WalletContext } from '../contexts';

export function WalletButton() {
  const context = React.useContext(WalletContext);
  return (
    <button
      onClick={() => context.startConnectionDialog()}
      disabled={context.connecting}
    >
      {context.connecting ? 'Connecting' : 'Connect'}
    </button>
  );
}
