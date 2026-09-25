import db from '../../db/banco.js';
import { NextResponse } from 'next/server';

export async function ListarAlunos(){
    const alunos = db.prepare('SELECT * FROM alunos ORDER BY nome');
    return NextResponse.json(alunos);
};

export default async function salvarAlunos(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare('INSERT INTO alunos (nome, idade, serie, ra) VALUES (?, ?, ?, ?)');
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra);
        return NextResponse.json({
            mensagem: 'Aluno salvo com sucesso!'
        })
    } catch (error) {
        console.error('Erro ao salvar usuário', error);
    }
}

export async function editarAlunos(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare('UPDATE alunos SET nome = ?, idade = ?, serie = ? WHERE ra = ?');
        sql.run(dados.nome, dados.idade, dados.serie, dados.ra);
        return NextResponse.json({ mensagem: 'Aluno editado com sucesso!' });
    } catch (error) {
        return NextResponse.json({ erro: 'Erro ao editar aluno' });
    }
}

export async function excluirAlunos(request) {
    try {
        const dados = await request.json();
        const sql = db.prepare('DELETE FROM alunos WHERE ra = ?');
        sql.run(dados.ra);
        return NextResponse.json({ mensagem: 'Aluno excluído com sucesso!' });
    } catch (error) {
        return NextResponse.json({ erro: 'Erro ao excluir aluno' });
    }
}