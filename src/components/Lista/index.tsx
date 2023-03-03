import React, { useState } from "react";
import ITarefa from "../../types/tarefa";
import Item from "./Item";
import style from "./Lista.module.scss";

function Lista({ tarefas }: {tarefas: ITarefa[]}) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, indice) => (
                    <Item
                        key={indice}
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;