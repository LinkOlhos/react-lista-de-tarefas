const Tarefas = () => {

    const [tarefas,setTrefas] = useState([]);
    const [formCriar, setFormCriar]

function pesquisarTarefa(palavra){
    if(palavra.length == 0){
        carregarTarefas(tarefas);
        return;
    }

    if(palavra.length >= 3){
        tarefas.filter((tarefa) => { return tarefa.titulo.toLowerCase().includes(palavra.toLowerCase()) })
        carregarTarefas(tarefasFiltradas);
    }
}

    return (
        `<div>
  <header
        className="flex justify-between items-center py-4 px-15 bg-gradient-to-red from-purple-900 via-purple-600 to-purple-900">
        <input onkeyup="pesquisarTarefa(this.value)" type="text" placeholder="Pesquisar" className="w-100 h-10 pl-4 rounded bg-white" />
        <button
            onclick="abrirFormCriar()"
            className="leading-10 bg-purple-800 rounded px-4 font-bold text-white duration-200 cursor-pointer hover:bg-purple-400 hover:text-black">Nova
            Tarefa</button>
    </header>

    <main className="p-15 bg-slate-200">
        <h1 className="text-3xl font-bold mb-6">Tarefas</h1>
        <div id="tarefas" className="grid grid-cols-3 gap-4"></div>
        <div
         id="overlay" onclick="fecharFormCriar(), fecharFormEditar()" className="w-full h-screen bg-black/70 fixed top-0 left-0 opacity-0 invisible duration-200"></div>

        <div id="form-criar"
            className="w-100 p-4 rounded-lg bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible duration-200 delay-200">
            <div className="flex justify-end">
                <box-icon name='x' className="cursor-pointer" onclick="fecharFormCriar()"></box-icon>
            </div>
            <form onSubmit={criarTarefa} className="flex flex-col">
                <label for="titulo" className="uppercase text-xs font-bold mb-2 block">Titulo</label>
                <input id="titulo" type="text" placeholder="Titulo da tarefa"
                    className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
                    required />
                <label for="descricao" className="uppercase text-xs font-bold mb-2 block">Descrição</label>
                <textarea
                    id="descricao"
                    className="pl-3 h-30 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"'
                    required></textarea>
                <button type="submit"
                    className="w-full h-10 rounded bg-purple-400 hover:bg-purple-600 duration-200 hover:text-white font-bold">Criar</button>
            </form>
        </div>

        <div id="form-editar"
            className="w-100 p-4 rounded-lg bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 invisible duration-200 delay-200">
            <div className="flex justify-end">
                <box-icon name='x' className="cursor-pointer" onclick="fecharFormEditar()"></box-icon>
            </div>
            <form onSubmit="criarTarefa()" className="flex flex-col">
                <label for="tituloEdicao" className="uppercase text-xs font-bold mb-2 block">Titulo</label>
                <input id="tituloEdicao" type="text" placeholder="Titulo da tarefa"
                    className="pl-3 h-10 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
                    required />
                <label for="descricaoEdicao" className="uppercase text-xs font-bold mb-2 block">Descrição</label>
                <textarea
                    id="descricaoEdicao"
                    className="pl-3 h-30 border-2 border-slate-400 focus:border-purple-600 duration-150 rounded outline-none mb-4"
                    required></textarea>
                <button type="submit"
                    className="w-full h-10 rounded bg-purple-400 hover:bg-purple-600 duration-200 hover:text-white font-bold">Criar</button>
            </form>
        </div>
    </main>
        </div>`
    );
}

export default Tarefas;