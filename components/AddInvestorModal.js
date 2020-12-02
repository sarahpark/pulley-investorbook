import styles from '../styles/AddInvestorModal.module.scss'

function AddInvestorModal() {

  function toggleModal() {
    this.props.toggleModal;
  }

  return (
    <div className={styles.modal}>
      <div className={styles.content}>
        <h3>Add Investment</h3>
        <p>Please enter the details of the investment.</p>
        <form>
          <input type="text" placeholder="Select Company" />
          <input type="number" placeholder="Investment Amount" />
          <div className={styles.actions}>
            <button onClick={toggleModal} className={styles.secondaryBtn}>Cancel</button>
            <button className={styles.primaryBtn}>Add Company</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddInvestorModal
