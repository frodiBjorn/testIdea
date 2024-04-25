import { Tickets } from "./components/Tickets/Tickets";
import styles from "./App.module.scss";
import { Sidebar } from "./components/Sidebar/Sidebar";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <>
      <div className={styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={styles.content}>
        <Sidebar />
        <Tickets />
      </div>
    </>
  );
}

export default App;
