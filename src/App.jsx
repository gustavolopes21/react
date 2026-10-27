import './App.css';

function ProdutoCard({ nome, preco, categoria }) {
  return (
    <article className="produto-card">
      <div className="card-topo">
        <div className="icone-agua">≈</div>

        <span className={`categoria ${categoria.toLowerCase()}`}>
          {categoria}
        </span>
      </div>

      <h2>{nome}</h2>

      <p className="texto-indicador">Indicador do nível da água</p>

      <div className="valor-container">
        <span className="valor">{preco}</span>
        <span className="porcentagem">%</span>
      </div>

      <div className="barra-progresso">
        <div
          className={`barra-preenchida ${categoria.toLowerCase()}`}
          style={{ width: `${preco}%` }}
        ></div>
      </div>

      <p className="texto-risco">
        {categoria === 'Alto'
          ? 'Atenção: indicador elevado.'
          : categoria === 'Moderado'
            ? 'Acompanhe as condições da região.'
            : 'Indicador baixo neste exemplo.'}
      </p>
    </article>
  );
}

function App() {
  return (
    <div className="aplicacao">
      <aside className="menu-lateral">
        <div className="logo">
          <div className="logo-icone">M</div>

          <div>
            <h2>MPE</h2>
            <span>Monitoramento</span>
          </div>
        </div>

        <div className="menu-titulo">MENU PRINCIPAL</div>

        <nav className="navegacao">
          <a href="#inicio" className="link-menu ativo">
            <span>▦</span>
            Visão geral
          </a>

          <a href="#regioes" className="link-menu">
            <span>⌖</span>
            Regiões monitoradas
          </a>

          <a href="#alertas" className="link-menu">
            <span>⚠</span>
            Alertas
          </a>
        </nav>

        <div className="menu-inferior">
          <div className="status-sistema"></div>

          <div>
            <strong>Projeto acadêmico</strong>
            <p>Versão demonstrativa</p>
          </div>
        </div>
      </aside>

      <main className="conteudo" id="inicio">
        <header className="cabecalho">
          <div>
            <p className="sobretitulo">MONITORAMENTO AMBIENTAL</p>
            <h1>Painel de monitoramento</h1>
            <p className="subtitulo">
              Acompanhe os indicadores das regiões de Esteio.
            </p>
          </div>

          <div className="etiqueta-demo">
            <span></span>
            Modo demonstração
          </div>
        </header>

        <section className="banner">
          <div className="banner-conteudo">
            <span className="banner-etiqueta">
              SISTEMA DE ACOMPANHAMENTO
            </span>

            <h2>Informação para prevenir.</h2>

            <p>
              Consulte os indicadores demonstrativos e acompanhe
              as condições das regiões monitoradas.
            </p>

            <a href="#regioes" className="botao-banner">
              Ver regiões <span>→</span>
            </a>
          </div>

          <div className="banner-ilustracao" aria-hidden="true">
            <div className="circulo circulo-1"></div>
            <div className="circulo circulo-2"></div>
            <div className="gota">≈</div>
            <div className="onda onda-1"></div>
            <div className="onda onda-2"></div>
            <div className="onda onda-3"></div>
          </div>
        </section>

        <section className="resumo">
          <div className="resumo-cabecalho">
            <div>
              <h2>Resumo geral</h2>
              <p>Visão rápida dos dados cadastrados.</p>
            </div>

            <span className="tag-exemplo">DADOS FICTÍCIOS</span>
          </div>

          <div className="indicadores-gerais">
            <article className="indicador-card">
              <div className="indicador-icone azul">⌖</div>
              <div>
                <p>Regiões monitoradas</p>
                <strong>03</strong>
                <span>Regiões de exemplo</span>
              </div>
            </article>

            <article className="indicador-card">
              <div className="indicador-icone vermelho">!</div>
              <div>
                <p>Indicador alto</p>
                <strong>01</strong>
                <span>Região de exemplo</span>
              </div>
            </article>

            <article className="indicador-card">
              <div className="indicador-icone amarelo">◷</div>
              <div>
                <p>Indicador moderado</p>
                <strong>01</strong>
                <span>Região de exemplo</span>
              </div>
            </article>
          </div>
        </section>

        <section className="regioes" id="regioes">
          <div className="secao-cabecalho">
            <div>
              <h2>Regiões monitoradas</h2>
              <p>Confira o indicador apresentado para cada região.</p>
            </div>

            <span className="contador">3 regiões</span>
          </div>

          <div className="lista-regioes">
            <ProdutoCard
              nome="Centro de Esteio"
              preco={80}
              categoria="Alto"
            />

            <ProdutoCard
              nome="Bairro Olímpica"
              preco={35}
              categoria="Moderado"
            />

            <ProdutoCard
              nome="Parque Amador"
              preco={15}
              categoria="Baixo"
            />
          </div>
        </section>

        <section className="alerta-principal" id="alertas">
          <div className="alerta-icone">!</div>

          <div>
            <h3>Atenção aos indicadores</h3>
            <p>
              O Centro de Esteio apresenta o maior valor entre os
              exemplos cadastrados. Isso não representa uma medição
              real nem confirma risco de enchente.
            </p>
          </div>
        </section>

        <footer className="rodape">
          <div>
            <strong>MPE</strong>
            <span>Monitoramento de Possíveis Enchentes</span>
          </div>

          <p>
            Projeto demonstrativo · Dados fictícios
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;