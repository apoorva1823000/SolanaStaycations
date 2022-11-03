import {ConnectionProvider, WalletProvider} from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useMemo } from 'react';

const connection = "https://neat-little-tent.solana-devnet.discover.quiknode.pro/3e77f025ae8921767a6ef39901151a650349c34d/"

const WalletConnectionProvider = ({ children }) => {
    const endpoint = useMemo(() => connection, [])
    const wallets = useMemo(() => [new PhantomWalletAdapter()], [])
    return (
        <ConnectionProvider endpoint={endpoint}>    
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    )
}

export default WalletConnectionProvider