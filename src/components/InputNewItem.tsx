import styles from './InputNewItem.module.css'
import plus from '../assets/plus.svg'

export function InputNewItem() {
    return (
        <form action="" className={styles.form}>
            <input type="text" placeholder='Adicione uma nova tarefa...' />
            <button>Criar <img src={plus} alt="Botão Adicionar" /></button>
        </form>
    )
}