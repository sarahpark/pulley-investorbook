import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Details.module.scss'

const investments = [
  {
    name: 'Abbott Laboratories',
    amount: '$30,000.00'
  },
  {
    name: 'Advanced Micro Devices',
    amount: '$15,000.00'
  },
  {
    name: 'Altice USA',
    amount: '$5,000.00'
  }
]

function Investment({ name, amount }) {
  return (
    <div className={styles.row}>
      <p className={styles.name}>{name}</p>
      <p className={styles.amount}>{amount}</p>  
      <div className={styles.actions}>
        <img src="/edit-icon.png" alt="Edit" />
        <img src="/delete-icon.png" alt="Delete" />
      </div>
    </div>
  )
}

export default function Details() {
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

        <main className={styles.content}>

          <div className={styles.back}>
            <div>
              <Link href='/'>
                <a><img className={styles.backIcon} src="/back.png" alt="Go back" /></a>
              </Link>
            </div>
            <div>
              <img className={styles.headshot} src="/headshots/rochelle-pfp.jpg" alt="Rochelle Barnard" />
            </div>
          </div>

          <div className={styles.mainContent}>
            <div className={styles.header}>
              <div className={styles.person}>
                <h1>Rochelle Barnard</h1>
                <p>Total Amount Invested: $50,000</p>
              </div>
              <div className={styles.actions}>
                <button><img src="/edit-icon.png" alt="Edit" />Edit name</button>
                <button><img src="/delete-icon.png" alt="Delete" />Remove investor</button>
              </div>
            </div>

            <div className={styles.table}>
              <div className={styles.tableTitle}>
                <h3>Investments</h3>
                <button>+ Add Investments</button>
              </div>
              <div className={styles.tableHeaders}>
                <p className={styles.title1}>Name</p>
                <p className={styles.title2}>Amount</p>
                <p className={styles.title3}>Actions</p>
              </div>
              {investments.map((investment) => (
                <Investment
                  name={investment.name}
                  amount={investment.amount}
                />
              ))}
            </div>
          </div>

        </main>
          
      </main>
    </div>
  )
}
