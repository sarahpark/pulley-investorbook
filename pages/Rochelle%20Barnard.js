import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

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

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Investorbook | By Sarah Park</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.logo}>
          <img src="/logo.svg" alt="Logo" />
        </div>

        <div>
          <img src="/back.png" alt="Go back" />
          <img src="/headshots/rochelle-pfp.jpg" alt="Rochelle Barnard" />
          <h1>Rochelle Barnard</h1>
          <p>Total Amount Invested: $50,000</p>
          <div>
            <img src="/edit-icon.png" alt="Edit" />
            Edit name
          </div>
          <div>
            <img src="/delete-icon.png" alt="Delete" />
            Remove investor
          </div>
        </div>

        <div>
          <div className={styles.tableTitle}>
            <h3>Investors</h3>
            <button>+ Add Investments</button>
          </div>
          <div className={styles.tableHeaders}>
            <p className={styles.title1}>Name</p>
            <p className={styles.title2}>Investments</p>
            <p className={styles.title3}>Actions</p>
          </div>
          {investments.map((investment) => (
            <Investment
              name={investment.name}
              amount={investment.amount}
            />
          ))}
        </div>
          
      </main>
    </div>
  )
}
