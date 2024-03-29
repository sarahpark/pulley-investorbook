import Head from 'next/head'
import Link from 'next/link'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../styles/Home.module.scss'

const investors = [
  {
    firstName: 'Rochelle',
    lastName: 'Barnard',
    headshot: 'rochelle-pfp.jpg',
    investments: 'Abbott Laboratories, Advanced Micro Devices, Altice USA, American Express, AutoZone, Builders FirstSource, Caesars Entertainment, Corning, Dana, Discover Financial Services, Edison International, Expedia Group, Hertz, Global Holdings, Hilton Worldwide Holdings, Keurig Dr Pepper, Macy\'s, NGL Energy Partners, NetApp, News Corp., Qualcomm, Rockwell Collins, Stanley Black & Decker, WestRock'
  },
  {
    firstName: 'Nick',
    lastName: 'Barajas',
    headshot: 'nick-pfp.jpg',
    investments: 'AT&T, American Express, Ameriprise Financial, Anixter International, Bristol-Myers Squibb, Builders FirstSource, CarMax, Cintas, DaVita, Global Partners, Hanesbrands, Hershey, Hormel Foods, Kroger, Liberty Media, Navistar International, ON, Semiconductor, Post Holdings'
  },
  {
    firstName: 'Ananya',
    lastName: 'Lovell',
    headshot: 'ananya-pfp.jpg',
    investments: 'A-Mark Precious Metals, Albertsons, American Express, Anadarko Petroleum, Aramark, Ascena Retail Group, CDW, Chesapeake Energy, Comcast, Dana, Entergy, Farmers Insurance Exchange, Harley-Davidson, Lennar, Mohawk Industries, NGL Energy Partners, Nvidia, R.R. Donnelley & Sons, Republic Services, Sherwin-Williams, Textron, Thermo Fisher, Scientific, TravelCenters of America, W.R. Berkley, Williams'
  },
  {
    firstName: 'Dante',
    lastName: 'Mansell',
    headshot: 'dante-pfp.jpg',
    investments: 'Abbott Laboratories, Advanced Micro Devices, Altice USA, American Express, AutoZone, Builders FirstSource, Caesars Entertainment, Corning, Dana'
  },
  {
    firstName: 'Kayden',
    lastName: 'Tate',
    headshot: 'kayden-pfp.jpg',
    investments: 'AT&T, American Express, Ameriprise Financial, Anixter International, Bristol-Myers Squibb, Builders FirstSource, CarMax, Cintas, DaVita, Global Partners, Hanesbrands, Hershey, Hormel Foods, Kroger, Liberty Media, Navistar International, ON, Semiconductor, Post Holdings, Rite Aid, Robert Half International, Southwest Airlines, Tenneco, Thermo Fisher, Scientific, WestRock, iHeartMedia'
  },
  {
    firstName: 'Bruno',
    lastName: 'Liu',
    headshot: 'bruno-pfp.jpg',
    investments: 'A-Mark Precious Metals, Albertsons, American Express, Anadarko Petroleum, Aramark, Ascena Retail Group, CDW, Chesapeake Energy, Comcast, Dana, Entergy, Farmers Insurance Exchange, Harley-Davidson, Lennar, Mohawk Industries, NGL Energy Partners, Nvidia, R.R. Donnelley & Sons'
  },
]

const companies = [
  {
    name: 'Abbott Laboratories',
    investors: 'Alyson Carlos, Casimira Minchew, Daisy Whitely, Deb Dagen, Drema Nida, Howard Labadie, Jessie Staten, Julienne Vandermeer, Kallie Weick, Kazuko Earlywine, Maisie Clack, Marlys Bonomo, Melissia Sun, Merrill Marquette, Nathan Zhou, Pa Zakrzewski, Pearl Overbeck, Tonisha Roysden, Wayne Wittenberg, Yetta Parfait'
  },
  {
    name: 'Advanced Micro Devices',
    investors: 'Adelle Perro, Aura Kistner, Babette Rego, Brigid Christner, Chanda Thormahlen, Cristal Allmon, Denis Niccum, Elna Tinch, Erika Whitley, Gerard Calhoon, Gisela Stennis, Janean Mader, Jc Buttars, Kathrin Groll, Linwood Doane, Myra Kauppi, Norine Eifert, Tyisha Humiston, Wiley Keppler, Winston Funes'
  },
  {
    name: 'Altice USA',
    investors: 'Analisa Leclair, Angele Kruse, Annamaria Sauders, Antoine Lacy, Bettina Lofgren, Brianna Ney, Caridad Simard, Cherrie Dolph, Chong Franko, Claude Pabon, Constance Rau, Deann Briganti, Devora Marriott, Eleonore Kriegel, Erlene Perri, Farah Gioia, Franklyn Russi, Jennefer Rippe, Keiko Lashbrook, Kristle Osornio, Maddie Bayley, Pauline Monroig, Pedro Gertz, Rosella Akers, Rubin Mendelsohn, Shandi Knepp, Star Foti, Sterling Rotz, Tam Haislip, Tenesha Weber'
  },
  {
    name: 'American Express',
    investors: 'Alyson Carlos, Casimira Minchew, Daisy Whitely, Deb Dagen, Drema Nida, Howard Labadie, Jessie Staten, Julienne Vandermeer, Kallie Weick, Kazuko Earlywine, Maisie Clack, Marlys Bonomo'
  },
  {
    name: 'AutoZone',
    investors: 'Adelle Perro, Aura Kistner, Babette Rego, Brigid Christner, Chanda Thormahlen, Cristal Allmon, Denis Niccum, Elna Tinch, Erika Whitley, Gerard Calhoon, Gisela Stennis, Janean Mader, Jc Buttars, Kathrin Groll, Linwood Doane, Myra Kauppi, Norine Eifert, Tyisha Humiston, Wiley Keppler, Winston Funes'
  },
  {
    name: 'AT&T',
    investors: 'Analisa Leclair, Angele Kruse, Annamaria Sauders, Antoine Lacy, Bettina Lofgren, Brianna Ney, Caridad Simard, Cherrie Dolph, Chong Franko, Claude Pabon, Constance Rau, Deann Briganti, Devora Marriott, Eleonore Kriegel, Erlene Perri, Farah Gioia, Franklyn Russi, Jennefer Rippe, Keiko Lashbrook, Kristle Osornio, Maddie Bayley, Pauline Monroig'
  },
]

function Investor({ firstName, lastName, headshot, investments }) {
  return (
    <div className={styles.row}>
      <div className={styles.name}>
        <img className={styles.headshot} src={`/headshots/${headshot}`} alt={`${firstName} ${lastName}`} />
        <Link href={`${firstName}${lastName}`}>
          <a>{firstName} {lastName}</a>
        </Link>
      </div>
      <p className={styles.details}>{investments}</p>  
    </div>
  )
}

function Company({ name, investors }) {
  return (
    <div className={styles.row}>
      <p className={styles.name}>{name}</p>
      <p className={styles.details}>{investors}</p>  
    </div>
  )
}

function Search({ placeholder }) {
  return (
    <div className={styles.search}>
      <img src='/search-icon.png' alt='search'/>
      <input placeholder={placeholder} />
    </div>
  )
}

function Pagination() {
  return (
    <div className={styles.pagination}>
      Rows per page:
      <p className={styles.dropdown}>6
        <img className={styles.dropdownIcon} src='/drop-down.png' alt='drop down'/>
      </p>
      <div className={styles.pageInfo}>
        1-6 of 1,000
        <div className={styles.nextPrev}>
          <img src='/left-arrow.png' alt='left arrow'/>
          <img src='/right-arrow.png' alt='right arrow'/>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Investorbook | By Sarah Park</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/pcn6hma.css" />
      </Head>

      <main className={styles.main}>

        <div className={styles.logo}>
          <img src="/logo.svg" alt="Logo" />
        </div>

        <Tabs className={styles.tabsContainer}>
          <TabList>
            <Tab>Investors</Tab>
            <Tab>Companies</Tab>
          </TabList>

          <TabPanel>
            <div className={styles.header}>
              <h2>Investors</h2>
              <button>Add Investor</button>
              <Search placeholder='Search investors' />
            </div>

            <div>
              <div className={styles.tableHeaders}>
                <p className={styles.title1}>Name</p>
                <p className={styles.title2}>Investments</p>
              </div>
              {investors.map((investor) => (
                <Investor
                  firstName={investor.firstName}
                  lastName={investor.lastName}
                  headshot={investor.headshot}
                  investments={investor.investments}
                />
              ))}
              <Pagination />
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.header}>
              <h2>Companies</h2>
              <button>Add Company</button>
              <Search placeholder='Search companies' />
            </div>
            <div>
              <div className={styles.tableHeaders}>
                <p className={styles.title1}>Name</p>
                <p className={styles.title2}>Investors</p>
              </div>
              {companies.map((company) => (
                <Company
                  name={company.name}
                  investors={company.investors}
                />
              ))}
              <Pagination />
            </div>
          </TabPanel>
        </Tabs>
      </main>
    </div>
  )
}
