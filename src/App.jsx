import { useState } from 'react'
import './App.css'
import './blocos.css'
import './form.css'
import './jornada.css'
import './objetivo.css'

function App() {

  return (
    <div className="App">
      <header>
            <div class="caixa">
                <nav>
                  <h1><a href="#"><img class="netuno" src="src/Assets_Netuno/assets/logo.png"></img></a></h1>
                    <ul>
                      <li><a href="index.html">O Projeto</a></li>
                      <li><a href="index.html">O Problema</a></li>
                      <li><a href="index.html">Sua Jornada</a></li>
                      <li><a href="index.html">Objetivos</a></li>
                      <li><a class="botao-processo" href="index.html"><b>Processo Seletivo</b></a></li>
                    </ul>
                </nav>
			      </div>
      </header>

      <main>
        <div class="principal">
            <figcaption>
              <form class="formulario" action="#">
                <div class="form-header">
                  <div class="title">
                    <h3>Formulário de cadástro</h3>
                    <h5>Preencha seus dados</h5>
                    <div class="input-group">
                      <div class="input_box">
                        <li><img class="icone" src="src/Assets_Netuno/icones/user.png"/><input class="info" type="text" name="nome" placeholder="Nome Completo*" required></input></li>
                        <li><img class="icone-mail" src="src/Assets_Netuno/icones/mail.png"/><input class="info" type="text" name="email" placeholder="E-mail*" required></input></li>
                        <li><img class="icone" src="src/Assets_Netuno/icones/state.png"/><select class="info" name="Estado">
                          <option value="Estado">Estado </option>
                          <option value="Estado">Acre </option>
                          <option value="Estado">Alagoas </option>
                          <option value="Estado">Amapá </option>
                          <option value="Estado">Amazonas </option>
                          <option value="Estado">Bahia </option>
                          <option value="Estado">Ceará </option>
                          <option value="Estado">Distrito Federal </option>
                          <option value="Estado">Espírito Santo </option>
                          <option value="Estado">Maranhão </option>
                          <option value="Estado">Mato Grosso </option>
                          <option value="Estado">Mato Grosso do Sul </option>
                          <option value="Estado">Minas Gerais </option>
                          <option value="Estado">Pará </option>
                          <option value="Estado">Paraíba </option>
                          <option value="Estado">Paraná </option>
                          <option value="Estado">Pernambuco </option>
                          <option value="Estado">Piauí </option>
                          <option value="Estado">Rio de Janeiro </option>
                          <option value="Estado">Rio Grande do Norte </option>
                          <option value="Estado">Rio Grande do Sul </option>
                          <option value="Estado">Rondônia </option>
                          <option value="Estado">Roraima </option>
                          <option value="Estado">Santa Catarina </option>
                          <option value="Estado">São Paulo </option>
                          <option value="Estado">Sergipe </option>
                          <option value="Estado">Tocantins </option>
                        </select></li>
                      </div>
                    </div>
                  </div>
                  <div class="conhecimentos">
                    <h5>Conhecimento de programação*</h5>
                    <div class="check">
                      <div class="grupo1">
                        <li><input type="checkbox" name="opcoes" value="html"/> HTML </li>
                        <li><input type="checkbox" name="opcoes" value="css"/> CSS </li>
                        <li><input type="checkbox" name="opcoes" value="javascript"/> JavaScript </li>
                        <li><input type="checkbox" name="opcoes" value="php"/> PHP <br /></li>
                      </div>
                      <div class="grupo1">
                        <li><input type="checkbox" name="opcoes" value=".NET"/> .NET </li>
                        <li><input type="checkbox" name="opcoes" value="Vue.JS"/> Vue.JS </li>
                        <li><input type="checkbox" name="opcoes" value="React.JS"/> React.JS </li>
                        <li><input type="checkbox" name="opcoes" value="React Native"/> React Native <br /></li>
                      </div>
                      <div class="grupo1">
                        <li><input type="checkbox" name="opcoes" value="Node"/> Node </li>
                        <li><input type="checkbox" name="opcoes" value="Python"/> Python </li>
                        <li><input type="checkbox" name="opcoes" value="Flutter"/> Flutter </li>
                        <li><input type="checkbox" name="opcoes" value="Outras"/> Outras <br /></li>
                      </div>
                    </div>
                  </div>
                  <div class="trabalho">
                    <h5>Já trabalhou com desenvolvimento?</h5>
                    <div class="opcao">
                      <input class="checkmark" type="checkbox" name="opcoes" value="Não"/> Não
                      <input class="checkmark" type="checkbox" name="opcoes" value="Sim"/> Sim <br />
                    </div>
                  </div>
                </div>
                <h6 class="line"><p>_____________________________________</p></h6>
                <h6 class="campos"><p> (*) Campos obrigatórios</p></h6>
                <input type="submit" value="Enviar" class="enviar"></input>
                <h6>
                  <p class="politica">Ao clicar em enviar, você concorda com todos os termos de uso em <a href="#">Politica de privacidade</a></p>
                </h6>
              </form>
              <h1><img class="banner" src="src/Assets_Netuno/bannertopo.png"></img></h1>
            </figcaption>
        </div>

        <section class="projeto">
          <img src="src/Assets_Netuno/dev.png"></img>
          <h2>O Projeto</h2>
          <p>Com o “novo normal” causado pela pandemia dos últimos anos, mais empresas no mundo todo têm aberto oportunidades no modelo Home Office. Alinhado a depreciação da moeda local, temos um alto índice de profissionais migrando para trabalhos em outros países.</p>
          <br/>
          <p><b>O projeto Netuno, idealizado pela Fasters, tem por objetivo reduzir os estresses causados por recrutamento e turn over na área de tecnologia, bem como gerar oportunidades de carreira para novos profissionais.</b></p>
        </section>

        <div class="prob">
          <section class="problema">
            <img src="src/Assets_Netuno/container2.png"/>
            <h2>O Problema</h2>
            <p><b>Falta de profissionais de TI no Mercado brasileiro: um problema que demanda atenção urgente.</b></p>
            <h6 class="line"><p>___________________________________</p></h6>
            <p>Estima-se que atualmente tenhamos um déficit de 408 mil postos de trabalho, com perdas se acumulando na casa dos R$167 bilhões, de acordo com a Softex, uma organização social voltada ao fomento da área de TI.</p>
            <br />
            <p><b>Um dos principais fatores dessa falta de profissionais é o êxodo de profissionais para o exterior.</b></p>
          </section>
          
          <div class="bloco">
            <li>
              <section class="bloco1">
                <h1>Oportunidade</h1>
                <p>Acreditamos que a combinação de interesse, dedicação e oportunidade pode causar um grande impacto nas pessoas, nas organizações e no mundo.</p>
              </section>
            </li>
            <li>
              <section class="bloco1">
                <h1>Comunidade</h1>
                <p>Dentro de um grupo de pessoas mais experientes e acessíveis, a curva de aprendizado ocorre de forma mais rápida, fluída e eficiente.</p>
              </section>
            </li>
            <li>
              <section class="bloco1">
                <h1>Experiência Real</h1>
                <p>Entendemos que somente as experiências reais poderão trazer a bagagem que a teoria não o pode fazer.</p>
              </section>
            </li>
          </div>
        </div>
        
        <section class="jornada">
        <h1>Sua Jornada</h1>
          <div class="caixa1">
            <div class="conjunto">
              <li><img src="src/Assets_Netuno/icones/calendario.png" />Programas de 4 meses de duração, sendo 6 horas/dia.</li>
              <li><img src="src/Assets_Netuno/icones/medalha.png" />Do Zero ao Junior Promissor em 4 meses.</li>
              <li><img src="src/Assets_Netuno/icones/relogio.png" />640 horas de aplicação prática dos conceitos.</li>
            </div>
            <div class="conjunto">
              <li><img src="src/Assets_Netuno/icones/home.png" />Mentoria individual e coletiva em padrão ágil.</li>
              <li><img src="src/Assets_Netuno/icones/group.png" />100% Home Office com plataformas de cursos online.</li>
              <li><img src="src/Assets_Netuno/icones/target.png" />Variedade de áreas dentro da tecnologia.</li>
            </div>
          </div>
          <p class="cadastro">Quero me cadastrar para o <a href="#">processo seletivo <img src="src/Assets_Netuno/icones/enter.png"/></a></p>
          <img class="vetor" src="src/Assets_Netuno/Elements/Vector1.png"></img>
        </section>

        <section class="objetivo">
          <h1>Objetivos</h1>
          <div class="obj">
            <li>
              <section class="bloco1">
                <h1>Otimizar</h1>
                <p>Otimizar todo processo de contratação chegando a contribuir com uma economia de 40% no processo de recrutamento.</p>
              </section>
            </li>
            <li>
              <section class="bloco1">
                <h1>Gerar</h1>
                <p>Gerar novas oportunidades de carreira para pessoas interessadas em ingressar na área ou migrar de outras áreas que esteja descontente.</p>
              </section>
            </li>
            <li>
              <section class="bloco1">
                <h1>Filtrar</h1>
                <p>Criar oportunidades brilhantes para profissionais que se destacarem junto a parceiros estratégicos de negócios.</p>
              </section>
            </li>
          </div>
        </section>
      </main>

      <footer>
        <div class="rodape">
          <section class="conteudo_esq">
            <a href="#"><img class="logo_slogan" src="src/Assets_Netuno/assets/logo+slogan.png"/></a>
            <br/>
            <div class="redes">
              <img src="src/Assets_Netuno/icones/fb.png"/>
              <img src="src/Assets_Netuno/icones/ig.png"/>
              <img src="src/Assets_Netuno/icones/in.png"/>
            </div>
            <br/>
            <p class="direitos">Netuno© 2022 - Todos os direitos reservados</p>
          </section>

          <a href="#"><p class="processo_seletivo"><b>Processo seletivo</b></p></a>

          <section class="conteudo">
            <div class="itens">
              <li><p>O Projeto</p></li>
              <li><p>O Problema</p></li>
              <li><p>Sua Jornada</p></li>
              <li><p>Objetivos</p></li>
            </div>
            <div class="contato">
              <li><h1>Contato</h1></li>
              <li><p>(11) numero</p></li>
              <li><p>contato@netuno.com.br</p></li>
            </div>
          </section>
        </div>
      </footer>

    </div>
  )
}

export default App
