import React from 'react'
import styles from './Header.module.css'
import logo from '../../public/images/logo.png'
import { BiSearch, BiMenu } from 'react-icons/bi'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import { FaUserCircle } from 'react-icons/fa'
import { ImEqualizer } from 'react-icons/im'
import Image from 'next/image'

const Header = () => {
    return (
        <>
            <div className={`${styles.header_container} ${styles.space_between}`}>
                <Image src={logo} alt="airbnb logo" className={styles.logo_image} />

                <div className={styles.center_div}>
                    <div className={styles.text_filter}>Anywhere</div>
                    <div className={styles.divider}></div>
                    <span className={styles.text_filter}>Any week</span>
                    <div className={styles.divider}></div>
                    <span className={styles.text_filterv2}>Add guests</span>
                    <div className={styles.cirle_red} style={{ backgroundColor: "var(--main)" }}>
                        <BiSearch color='white' />
                    </div>
                </div>

                <div className={styles.right_user}>
                    <div className={styles.text_filter}>
                        Become a Host
                    </div>
                    <HiOutlineGlobeAlt size={20} />
                    <div className={styles._user}>
                        <BiMenu size={20} color="#222222" />
                        <FaUserCircle color='#717171' size={30} />
                    </div>
                </div>
            </div>
            <div className={styles.mobile_head}>
                <div className={styles.mobile_header}>
                    <div className={styles.cirle_red} style={{ backgroundColor: "white", width: "40px", height: "40px" }}>
                        <BiSearch color='grey' size={20} />
                    </div>
                    <div style={{ flex: 1 }}>
                        <div className={styles.place_name} style={{fontSize:'13px', fontWeight:600}}>Where to?</div>
                        <div className={styles.greyer} style={{fontSize:'12px'}}>
                            Anywhere &#8729; Any week &#8729; Add guests
                        </div>
                    </div>
                    <div className={styles.cirle_red} style={{ backgroundColor: "white", border: '1px solid rgb(235, 235, 235)', width: "40px", height: "40px" }}>
                        <ImEqualizer color='black' size={16}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header