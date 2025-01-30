import React from 'react';
import Head from 'next/head';
import Menu from '../componentes/Menu';
import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <div className="container">
         {/* b) Alterar o título no componente Head */}
         <Head>
            <title>Home</title>
         </Head>

         {/* c) Adicionar o componente Menu */}
         <Menu />

         {/* d) Definir a área principal (main) */}
         <main className={styles.main}>
            <h1 className={styles.title}>Página Inicial</h1>
         </main>
      </div>
   );
}
