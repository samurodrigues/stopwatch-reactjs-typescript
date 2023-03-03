import React, { useState } from 'react';
import Botao from '../components/Botao';
import Cronometro from '../components/Cronometro/indes';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import ITarefa from '../types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | []>([]);
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;
