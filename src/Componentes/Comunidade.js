import React, { useState } from 'react';

const Comunidade = () => {
  const [posts, setPosts] = useState([
    { id: 1, usuario: 'João', conteudo: 'Hoje foi um dia incrível!', curtidas: 20, comentarios: 5 },
    { id: 2, usuario: 'Maria', conteudo: 'Feliz em fazer parte desta comunidade!', curtidas: 8, comentarios: 3 },
    { id: 3, usuario: 'Ana', conteudo: 'Compartilhando meu dia com vocês :)', curtidas: 20, comentarios: 7 },
  ]);

  const handleCurtir = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, curtidas: post.curtidas + 1 } : post
      )
    );
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.titulo}>Comunidade</h2>
      <div style={styles.feed}>
        {posts.map((post) => (
          <div key={post.id} style={styles.post}>
            <div style={styles.usuario}>{post.usuario}</div>
            <p style={styles.conteudo}>{post.conteudo}</p>
            <div style={styles.interacoes}>
              <button onClick={() => handleCurtir(post.id)} style={styles.botao}>Curtir</button>
              <span style={styles.curtidas}>{post.curtidas} Curtidas</span>
              <span style={styles.comentarios}>{post.comentarios} Comentários</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: 'linear-gradient(135deg, rgba(200,255,200,0.5), rgba(255,255,255,0.5))',
    minHeight: '100vh',
  },
  titulo: {
    fontSize: '32px',
    color: '#333',
    marginBottom: '20px',
  },
  feed: {
    width: '95%',
    maxWidth: '900px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  post: {
    padding: '20px',
    borderRadius: '12px',
    background: 'white',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  usuario: {
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '10px',
    fontSize: '18px',
  },
  conteudo: {
    fontSize: '16px',
    color: '#333',
    marginBottom: '15px',
  },
  interacoes: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginTop: '10px',
  },
  botao: {
    padding: '10px 15px',
    borderRadius: '5px',
    border: 'none',
    color: 'white',
    background: '#4CAF50',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  curtidas: {
    color: '#333',
    fontSize: '14px',
  },
  comentarios: {
    color: '#333',
    fontSize: '14px',
  },
};

// Efeito de interação quando o post é curtido
styles.post[':hover'] = {
  transform: 'scale(1.02)',
  boxShadow: '0 6px 14px rgba(0, 0, 0, 0.2)',
};

export default Comunidade;
