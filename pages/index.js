import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Badges from '../components/Badges'
import Cards from '../components/Cards/Cards'
import { homes } from '../public/homes'
import CustomMap from '../components/Map/GoogleMapWidget'
import { IoMap } from 'react-icons/io5'
import { FaListUl } from 'react-icons/fa'
import styles from '../styles/Home.module.css'

const Home = () => {

    const [data, setData] = useState([])

    const [selection, setselection] = useState('OMG!')

    useEffect(() => {
        const data = homes.filter((home) => home.category === selection)
        setData(data)
    }, [])

    const filterData = (e) => {
        setselection(e.text)
        const data = homes.filter((home) => home.category === e.text)
        setData(data)
    }

    const [showMap, setshowMap] = useState(false)

    return (
        <section className={styles.home}>
            <div className={styles.header}>
                <Header />
            </div>
            
            <div className={styles.main} style={{ paddingTop: showMap ? "0" : "100px" }}>
                <div className={styles.sticky_header}>
                    <Badges
                        active={selection}
                        onClick={(e) => filterData(e)}
                    />
                </div>
                {
                    showMap ?
                        <CustomMap data={data} />
                        :
                        <div className={styles.card_container}>
                            {
                                data?.map((home, index) => (
                                    <div className={styles.col} key={index}>
                                        <Cards data={home} />
                                    </div>
                                ))
                            }
                        </div>
                }
            </div>

            {
                !showMap &&
                <div className={styles.footer}>
                    <Footer />
                </div>
            }

            <div className={styles.map_btn}
                onClick={() => setshowMap(!showMap)}
            >
                {
                    showMap ?
                        <>
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>Show list</span>
                            <FaListUl color='white' />
                        </>
                        :
                        <>
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>Show map</span>
                            <IoMap color='white' />

                        </>
                }
            </div>
            <div className={styles.map_btn_mobile}
                onClick={() => setshowMap(!showMap)}
            >
                {
                    showMap ?
                        <>
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>List</span>
                            <FaListUl color='white' />
                        </>
                        :
                        <>
                            <span style={{ fontSize: '13px', fontWeight: '500' }}>Map</span>
                            <IoMap color='white' />

                        </>
                }
            </div>
        </section>
    )
}
export default Home
