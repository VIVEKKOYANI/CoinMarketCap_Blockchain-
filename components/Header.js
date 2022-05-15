import React from 'react'
import Image from 'next/image';
import Search from '../assets/svg/search';
import { ConnectButton } from 'web3uikit';

const styles = {
    navLink: `text-white flex mx-[10px]`,
    badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
    navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
    nav: `flex justify-center items-center gap-[20px]`,
    header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
    headerWrapper: `flex justify-center h-full max-w-screen-xl mx-auto px-4`,
    inputContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
    input: `bg-transparent outline-none text-white w-70 ml-3`,
    cursorPointer: `mr-5 cursor-pointer`,
}

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                src='https://s2.coinmarketcap.com/static/cloud/img/coinmarketcap_white_1.svg'
                alt='logo'
                width={220}
                height={220}
            />

            <div className={styles.headerWrapper}>
                <nav className={styles.nav}>
                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Cryptocurrencies
                        </div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navItem}>Exchenges</div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            NFT
                        </div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Cryptown
                        </div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navItem}>Portfolio</div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navLink}>
                            Watchlist
                        </div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navItem}>Products</div>
                        <div className={styles.badge}></div>
                    </div>

                    <div className={styles.navItem}>
                        <div className={styles.navItem}>Learn</div>
                    </div>
                </nav>
                <div className='flex item-center'>
                    {/* ConnectButton */}
                    <ConnectButton />
                    <div className={styles.inputContainer}>
                        {/* Search */}
                        <Search />
                        <input className={styles.input} placeholder='Search' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header