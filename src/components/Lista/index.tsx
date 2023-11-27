import style from './Lista.module.scss';
import Item from './Item';
import { ITarefa } from '../../types/tarefa';


interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionda: ITarefa) => void
}

function Lista({tarefas, selecionaTarefa}: Props){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudo do dia</h2>
                <ul>
                    {tarefas.map((item => (                                               
                     <Item
                     selecionaTarefa={selecionaTarefa}
                     key={item.id}
                    {...item}
                     />   
                    ))}
                </ul>
        </aside>
    )
}

export default Lista;