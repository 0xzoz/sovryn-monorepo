import { ProviderType } from '../constants';
import { InjectedWalletProvider } from '../providers';
import { LedgerWalletProvider } from '../providers/ledger';

export const providersDictionary = {
  [ProviderType.WEB3]: InjectedWalletProvider,
  [ProviderType.LEDGER]: LedgerWalletProvider,
};
