import Header from "../components/header";
import Link from "next/link";
import styles from "./Principal.module.css";    

export default function Principal() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.main}>
        {/* Banner de Boas-Vindas */}
        <section className={styles.hero}>
          <h2 className={styles.heroTitle}>Portal do Aluno - SESI Mirandópolis</h2>
          <p className={styles.heroSubtitle}>
            Acompanhe comunicados, eventos, calendário escolar e avisos do portal.
          </p>
        </section>

        {/* Informações em Quadradinhos (Grid) */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Mural Informativo e Destaques</h3>

          <div className={styles.gridContainer}>
            <article className={styles.squareCard}>
              <span className={styles.tag}>Robótica</span>
              <h4>Torneio FLL & SPIKE</h4>
              <p>
                Inscrições abertas para as equipes de robótica. Participe das seleções presenciais!
              </p>
              <span className={styles.date}>Inscrições Abertas</span>
            </article>

            <article className={styles.squareCard}>
              <span className={styles.tag}>Calendário</span>
              <h4>Provas Bimestrais</h4>
              <p>
                O calendário com as datas das avaliações do 3º bimestre já está disponível.
              </p>
              <span className={styles.date}>Consulte a Coordenação</span>
            </article>

            <article className={styles.squareCard}>
              <span className={styles.tag}>Esportes</span>
              <h4>Copa Interclasses</h4>
              <p>
                Monte sua equipe de futsal e vôlei com o professor de Educação Física.
              </p>
              <span className={styles.date}>Início dos Jogos</span>
            </article>

            <article className={styles.squareCard}>
              <span className={styles.tag}>Ano Letivo</span>
              <h4>Reunião de Pais</h4>
              <p>
                Acolhimento aos responsáveis para entrega de boletins e orientações gerais.
              </p>
              <span className={styles.date}>Data na Secretaria</span>
            </article>
          </div>
        </section>

        {/* Mural de Avisos Rápidos (Um Embaixo do Outro) */}
        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>Mural de Avisos Gerais</h3>

          <div className={styles.noticeList}>
            <div className={styles.noticeCard}>
              <span className={styles.noticeIcon}>👕</span>
              <div className={styles.noticeContent}>
                <h5>Uso do Uniforme Escolar</h5>
                <p>É obrigatório o uso de camiseta e calça/bermuda oficial do SESI para a entrada e permanência na escola.</p>
              </div>
            </div>

            <div className={styles.noticeCard}>
              <span className={styles.noticeIcon}>📚</span>
              <div className={styles.noticeContent}>
                <h5>Funcionamento da Biblioteca</h5>
                <p>Empréstimos e devoluções disponíveis de segunda a sexta-feira, das 07h30 às 17h00.</p>
              </div>
            </div>

            <div className={styles.noticeCard}>
              <span className={styles.noticeIcon}>🍎</span>
              <div className={styles.noticeContent}>
                <h5>Alimentação e Cantina</h5>
                <p>O cardápio nutritivo semanal já está disponível no refeitório principal.</p>
              </div>
            </div>

            <div className={styles.noticeCard}>
              <span className={styles.noticeIcon}>⏰</span>
              <div className={styles.noticeContent}>
                <h5>Horário dos Portões</h5>
                <p>Fechamento pontual às 07h10 no turno da manhã e às 13h10 no turno da tarde.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Informações da Unidade */}
        <section className={styles.infoSection}>
          <h3 className={styles.sectionTitle}>Informações da Unidade</h3>
          <div className={styles.infoGrid}>
            <div className={styles.infoBox}>
              <strong>📍 Endereço</strong>
              <p>SESI Mirandópolis / SP</p>
            </div>
            <div className={styles.infoBox}>
              <strong>🕒 Atendimento</strong>
              <p>Segunda a Sexta: 07h00 - 18h00</p>
            </div>
            <div className={styles.infoBox}>
              <strong>📞 Contato</strong>
              <p>(18) 0000-0000</p>
            </div>
            <div className={styles.infoBox}>
              <strong>📧 E-mail</strong>
              <p>mirandopolis@sesisp.org.br</p>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© SESI Mirandópolis - Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}