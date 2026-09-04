'use client';
import Header from "../components/header";
import styles from "./listalunos.module.css";

export default function ListaAlunos() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        <div className={styles.card}>
          <h2 className={styles.title}>LISTA DE ALUNOS</h2>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>Idade</th>
                  <th>Série</th>
                  <th>RA</th>
                  <th className={styles.textCenter}>Ações</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>01</td>
                  <td>João</td>
                  <td>15</td>
                  <td>9ºA</td>
                  <td>123456</td>
                  <td>
                    <div className={styles.actionButtons}>
                      <button className={styles.btnEdit}>Editar</button>
                      <button className={styles.btnDelete}>Excluir</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>© SESI Mirandópolis - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}