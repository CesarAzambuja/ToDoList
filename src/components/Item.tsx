import styles from './Item.module.css';
import trashSvg from '../assets/Vector.svg'

export function Item() {
    return (
        <li className={styles.itemList}>
            <div>
                <input type="checkbox" name="" id="" className={styles.input} />
                <label htmlFor="">Minha tarefa do dia </label>
            </div>
            <button>
                <img src={trashSvg} alt="" />
            </button>
        </li>
    )
}