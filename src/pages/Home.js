//import './Home.css'
import InputText from '../components/InputText/InputText';
import styles from './Home.module.css';
const Home = () =>{
    return(

        <div className={styles.container}>
        <h4>Home Page</h4>
        <InputText/>
        </div>
    )
}
export default Home