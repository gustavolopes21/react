import './App.css';

const regioes = [
  { nome: 'Centro de Esteio', local: 'Centro - Esteio/RS', nivel: 80, risco: 'Alto' },
  { nome: 'Bairro Olímpica', local: 'Olímpica - Esteio/RS', nivel: 35, risco: 'Moderado' },
  { nome: 'Parque Amador', local: 'Parque Amador - Esteio/RS', nivel: 15, risco: 'Baixo' },
];

function Indicador({ icone, titulo, valor, detalhe, cor }) {
  return (
    <article className="indicador-card">
      <div className={`indicador-icone ${cor}`}>{icone}</div>
      <div className="indicador-info">
        <p>{titulo}</p>
        <strong>{valor}</strong>
        <span>{detalhe}</span>
      </div>
    </article>
  );
}

function App() {
  const quantidadeAlto = regioes.filter((r) => r.risco === 'Alto').length;

  return (
    <div className="aplicacao">
      <aside className="menu-lateral">
        <a href="#inicio" className="logo">
          <div className="logo-icone">≈</div>
          <div>
            <h2>MPE</h2>
            <span>Monitoramento de Enchentes</span>
          </div>
        </a>

        <p className="menu-titulo">MONITORAMENTO</p>

        <nav className="navegacao">
          <a href="#inicio" className="link-menu ativo">⌂ <span>Visão geral</span></a>
          <a href="#mapa" className="link-menu">⌖ <span>Mapa de risco</span></a>
          <a href="#regioes" className="link-menu">⌁ <span>Pontos monitorados</span></a>
          <a href="#alertas" className="link-menu">⚠ <span>Alertas</span></a>
          <a href="#previsao" className="link-menu">☁ <span>Previsão do tempo</span></a>
        </nav>

        <div className="menu-inferior">
          <span className="status-sistema" />
          <div>
            <strong>Painel demonstrativo</strong>
            <p>Dados de exemplo</p>
          </div>
        </div>
      </aside>

      <main className="conteudo" id="inicio">
        <header className="cabecalho">
          <div>
            <p className="sobretitulo">MONITORAMENTO AMBIENTAL · RS</p>
            <h1>Painel de monitoramento</h1>
            <p className="subtitulo">
              Acompanhe os indicadores das regiões de Esteio.
            </p>
          </div>
          <div className="local-atual">
            <span>⌖</span>
            <div><strong>Esteio, RS</strong><small>Rio Grande do Sul</small></div>
          </div>
        </header>

        <section className="banner">
          <div className="banner-conteudo">
            <span className="banner-etiqueta">MPE · MONITORAMENTO</span>
            <h2>Informação para prevenir.</h2>
            <p>
              Consulte os indicadores das regiões monitoradas e entenda
              melhor os possíveis riscos relacionados à água.
            </p>
            <a href="#mapa" className="botao-banner">Explorar painel →</a>
          </div>
          <div className="banner-ilustracao" aria-hidden="true">
            <span className="banner-gota">≈</span>
            <span className="banner-onda">〰 〰 〰</span>
          </div>
        </section>

        <section className="resumo">
          <div className="secao-cabecalho">
            <div>
              <h2>Resumo geral</h2>
              <p>Visão rápida dos indicadores cadastrados.</p>
            </div>
            <span className="tag-exemplo">DADOS FICTÍCIOS</span>
          </div>

          <div className="indicadores-gerais">
            <Indicador icone="⌖" titulo="Regiões monitoradas" valor={regioes.length.toString().padStart(2, '0')} detalhe="Locais de exemplo" cor="azul" />
            <Indicador icone="⚠" titulo="Indicador alto" valor={quantidadeAlto.toString().padStart(2, '0')} detalhe="Região de exemplo" cor="vermelho" />
            <Indicador icone="≈" titulo="Nível de água" valor="2,8 m" detalhe="Valor ilustrativo" cor="ciano" />
            <Indicador icone="☁" titulo="Condição do tempo" valor="18°C" detalhe="Previsão ilustrativa" cor="amarelo" />
          </div>
        </section>

        <section className="painel-principal" id="mapa">
          <div className="secao-cabecalho">
            <div>
              <h2>Mapa de monitoramento</h2>
              <p>Visualização das áreas de interesse em Esteio.</p>
            </div>
            <span className="tag-exemplo">MAPA ILUSTRATIVO</span>
          </div>

          <div className="mapa-placeholder">
            <div className="mapa-texto">
              <span className="mapa-icone">⌖</span>
              <h3>Mapa de Esteio</h3>
              <p>O mapa interativo será integrado nesta área.</p>
              <a href="#regioes" className="botao-banner">Ver pontos monitorados →</a>
            </div>
            <span className="marcador marcador-1">!</span>
            <span className="marcador marcador-2">!</span>
            <span className="marcador marcador-3">•</span>
            <div className="legenda-mapa">
              <span><i className="ponto-alto" /> Risco alto</span>
              <span><i className="ponto-medio" /> Risco moderado</span>
              <span><i className="ponto-baixo" /> Risco baixo</span>
            </div>
          </div>
        </section>

        <section className="regioes" id="regioes">
          <div className="secao-cabecalho">
            <div>
              <h2>Pontos de monitoramento</h2>
              <p>Confira os indicadores de cada região.</p>
            </div>
            <span className="contador">{regioes.length} pontos</span>
          </div>

          <div className="lista-regioes">
            {regioes.map((regiao) => (
              <article className="regiao-card" key={regiao.nome}>
                <div className={`regiao-ponto ${regiao.risco.toLowerCase()}`} />
                <div className="regiao-info">
                  <h3>{regiao.nome}</h3>
                  <p>{regiao.local}</p>
                  <div className="barra-progresso">
                    <div
                      className={`barra-preenchida ${regiao.risco.toLowerCase()}`}
                      style={{ width: `${regiao.nivel}%` }}
                    />
                  </div>
                  <small>Indicador ilustrativo: {regiao.nivel}%</small>
                </div>
                <span className={`categoria ${regiao.risco.toLowerCase()}`}>
                  {regiao.risco}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="blocos-inferiores" id="previsao">
          <article className="bloco-info">
            <span className="bloco-icone">☁</span>
            <h2>Previsão do tempo</h2>
            <p>As informações meteorológicas serão adicionadas futuramente.</p>
            <span className="tag-exemplo">DADOS NÃO CONECTADOS</span>
          </article>

          <article className="bloco-info dica">
            <span className="bloco-icone">ⓘ</span>
            <h2>Dica de segurança</h2>
            <p>
              Em períodos de chuva intensa, evite áreas alagadas e locais
              próximos a arroios. Acompanhe os avisos dos órgãos oficiais.
            </p>
          </article>
        </section>

        <section className="alerta-principal" id="alertas">
          <div className="alerta-icone">!</div>
          <div>
            <h3>Atenção aos indicadores</h3>
            <p>
              Os valores deste painel são fictícios e servem apenas para
              demonstração. Eles não representam medições reais nem confirmam
              risco de enchente.
            </p>
          </div>
        </section>

        <footer className="rodape">
          <div><strong>MPE</strong><span> · Monitoramento de Possíveis Enchentes</span></div>
          <p>Projeto acadêmico · Dados demonstrativos</p>
        </footer>
      </main>
    </div>
  );
}

export default App;