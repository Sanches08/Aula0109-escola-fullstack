'use client';
import { useState } from 'react';
import Header from "../components/header";
import styles from "./cadalunos.module.css";

export default function Cadnotas() {
  const [nomeAluno, setNomeAluno] = useState('');
  const [t1, setT1] = useState('');
  const [t2, setT2] = useState('');
  const [n1, setN1] = useState('');
  const [n2, setN2] = useState('');
  const [n3, setN3] = useState('');

  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.card}>
          <h2 className={styles.title}>CADASTRO DE NOTAS</h2>

          <form className={styles.form}>
            {/* Nome Aluno */}
            <div className={styles.inputGroup}>
              <label htmlFor="nomeAluno">Nome aluno</label>
              <input
                type="text"
                id="nomeAluno"
                value={nomeAluno}
                onChange={(e) => setNomeAluno(e.target.value)}
                placeholder="Digite o nome do aluno"
              />
            </div>

            {/* T1 e T2 */}
            <div className={styles.rowTwo}>
              <div className={styles.inputGroup}>
                <label htmlFor="t1">T1 (trabalho 1)</label>
                <input
                  type="number"
                  id="t1"
                  step="0.1"
                  value={t1}
                  onChange={(e) => setT1(e.target.value)}
                  placeholder="Nota T1"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="t2">T2 (trabalho 2)</label>
                <input
                  type="number"
                  id="t2"
                  step="0.1"
                  value={t2}
                  onChange={(e) => setT2(e.target.value)}
                  placeholder="Nota T2"
                />
              </div>
            </div>

            {/* N1, N2 e N3 */}
            <div className={styles.rowThree}>
              <div className={styles.inputGroup}>
                <label htmlFor="n1">N1 (nota 1)</label>
                <input
                  type="number"
                  id="n1"
                  step="0.1"
                  value={n1}
                  onChange={(e) => setN1(e.target.value)}
                  placeholder="Nota N1"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="n2">N2 (nota 2)</label>
                <input
                  type="number"
                  id="n2"
                  step="0.1"
                  value={n2}
                  onChange={(e) => setN2(e.target.value)}
                  placeholder="Nota N2"
                />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="n3">N3 (nota 3)</label>
                <input
                  type="number"
                  id="n3"
                  step="0.1"
                  value={n3}
                  onChange={(e) => setN3(e.target.value)}
                  placeholder="Nota N3"
                />
              </div>
            </div>

            <button type="submit" className={styles.btnSubmit}>
              Cadastrar
            </button>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© SESI Mirandópolis - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}