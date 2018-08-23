import React from "react";
import { Row, Col, Collapsible, CollapsibleItem } from "react-materialize";
import ProductView from "../utils/ProductView";
import { Link } from "react-router-dom";

import Slogan from "../utils/Slogan";
import "../../css/ProductsPage.css";

// Imagens

import DogSlogan from "../../img/backgrounds/dog-slogan.jpg";
// Calha
import calhaProd from "../../img/produtos/calha/calha-de-aco-prod.jpg";
import calhaThumb from "../../img/produtos/calha/calha-de-aco.jpg";
// Mesa
import mesaPantograficaProd from "../../img/produtos/mesa-pantografica/mesa-calha-pantografica-prod.jpg";
import mesaPantograficaThumb from "../../img/produtos/mesa-pantografica/mesa-calha-pantografica.jpg";
// Suporte de Soro
import suporteDeSoroProd from "../../img/produtos/suporte-soro-quadripe/suporte-soro-quadripe-prod.jpg";
import suporteDeSoroThumb from "../../img/produtos/suporte-soro-quadripe/suporte-soro-quadripe.jpg";
// Mesa calha
import mesaCalhaInoxProd from "../../img/produtos/mesa-calha/mesa-calha-inox-prod.jpg";
import mesaCalhaInoxThumb from "../../img/produtos/mesa-calha/mesa-calha-inox.jpg";
// Mesa fluidoterapia
import mesaFluidoTerapiaInoxProd from "../../img/produtos/mesa-fluidoterapia/mesa-fluidoterapia-prod.jpg";
import mesaFluidoTerapiaInoxThumb from "../../img/produtos/mesa-fluidoterapia/mesa-fluidoterapia.jpg";
// Berço Verterinário inox
import bercoVetInoxProd from "../../img/produtos/berco-vet-inox/berco-vet-inox-prod.jpg";
import bercoVetInoxThumb from "../../img/produtos/berco-vet-inox/berco-vet-inox.jpg";

const ProductsPage = () => (
  <div>
    <Row>
      <Slogan
        title={"União Veterinária"}
        content={"Materiais Veterinários"}
        image={DogSlogan}
        icon={"pets"}
      />
    </Row>
    <Row>
      <Col className="offset-s1 offset-m2" s={10} m={8}>
        <div className="text-header">
          <h4>Confira nosso termo de garantia!</h4>
        </div>
        <div>
          <ol>
            <li>Desistência da Compra em até 7 dias;</li>
            <li>Troca de Produto Novo (Sem Defeito);</li>
            <li>Produto entregue com Defeito (24hs);</li>
            <li>Produto com Defeito (garantia);</li>
            <li>Produto em Desacordo com o Pedido.</li>
          </ol>
        </div>
        <Collapsible>
          <CollapsibleItem header="1 - Desistência da Compra em até 7 dias">
            <div className="text-content">
              <p className="flow-text">
                Todo cliente possui um prazo de 7 dias corridos, a contar da
                data do recebimento do produto, de acordo com os Correios, para
                desistir da compra realizada na união vet, sem a necessidade de
                explicar os motivos para tal ação. Este prazo se inicia a partir
                da data do recebimento do produto pelo consumidor. Caso o prazo
                de desistência tenha vencimento em um dia não útil, ficará
                automaticamente prorrogado para o primeiro dia útil seguinte.
                Antes de efetuar o envio do produto novamente para união vet, o
                cliente deverá entrar em contato conosco; toda encomenda enviada
                de volta sem a comunicação prévia será automaticamente enviada
                para o mesmo endereço do remetente sendo o custo do frete por
                responsabilidade do consumidor. A desistência da compra deverá
                ser informada através do e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                Caso o consumidor não faça a comunicação de desistência à união
                vet, dentro do prazo de 7 (sete) dias corridos, a desistência
                será recusada e o produto será devolvido no mesmo endereço do
                remetente, sendo o custo do frete por responsabilidade do
                consumidor. Em caso de devolução por desistência, o produto deve
                estar em perfeitas condições de uso e sua embalagem original
                devidamente lacrada, sendo o custo do frete por responsabilidade
                do consumidor. Se houver avarias, danos, riscos de qualquer
                característica que desclassifique como um produto novo, a
                devolução será recusada.
              </p>
            </div>
            <blockquote>
              ATENÇÃO: O produto que não atender às condições exigidas acima,
              não será aceito como devolução e automaticamente será remetido de
              volta ao endereço de origem. Nessas condições, a união vet se
              reservará no direito de fazer nova cobrança de frete. Restituição
              dos valores: - Cartão de crédito: O estorno poderá ocorrer em até
              02 (duas) faturas subsequentes conforme determinação da Operadora
              de Cartão. ATENÇÃO: A restituição dos valores será processada
              somente após o recebimento e análise das condições do(s)
              produto(s) em nosso Empresa. O produto não poderá trazer qualquer
              indício de uso.
            </blockquote>
          </CollapsibleItem>
          <CollapsibleItem header="2 - Troca de Produto Novo (Sem Defeito)">
            <div className="text-content">
              <p className="flow-text">
                - De acordo com a lei, um produto novo tem o prazo de até 30
                dias corridos para ser substituído. Desde que este seja
                apresentado nas mesmas condições em que foi recebido/comprado
                (na embalagem original e sem uso)."Lembre-se que para efetuarmos
                a troca, o produto deverá estar na embalagem original e sem
                uso."- Se você escolheu o produto em nossa loja virtual, mas ao
                recebê-lo não ficou satisfeito e deseja fazer a substituição por
                outro item, observe as regras: Devolução da Mercadoria: - O
                produto não poderá apresentar qualquer indício de uso.- O
                produto deverá ser devolvido em sua embalagem original,
                acompanhado de todos os acessórios e manuais .A mercadoria
                deverá ser devolvida através dos correios ou transportadora,
                sendo previamente avisada a nossa Central de Atendimento através
                do e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                Substituição da Mercadoria - Você poderá fazer a escolha de
                outro item conforme estoque disponível em nossa loja virtual. -
                Lembrando que todos os encargos da tentativa de troca serão de
                responsabilidade do próprio cliente. A união vet se reservará ao
                direito de fazer a cobrança de frete e outros encargos de
                postagem do consumidor solicitante - A escolha de um novo
                produto deverá se limitar ao valor da mercadoria original. Se
                houver diferença, o pagamento dela deverá ser feito de acordo
                com as opções existentes no site. - O cliente deverá indicar,
                através do e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                , o novo item escolhido e o item de troca. O novo item será
                despachado para a residência do cliente, após confirmação de
                pagamento do frete e dos encargos gerados pela diferença de
                valores. Sendo o custo do frete por responsabilidade do
                consumidor.
              </p>
            </div>
          </CollapsibleItem>
          <CollapsibleItem header="3 - Produto entregue com Defeito (24hs)">
            <div className="text-content">
              <p className="flow-text">
                A união vet faz o possível para enviar todas as encomendas em
                perfeito estado aos nossos clientes, entretanto, caso o
                consumidor venha a receber algum produto que tenha a caixa
                aberta ou danificada, pedimos que entre em contato conosco
                imediatamente, desta forma poderemos acionar a transportadora
                responsável para averiguação. Toda encomenda deverá ser
                verificada em sua totalidade no momento do recebimento, assim
                como o funcionamento do mesmo, caso o consumidor receba um
                produto que esteja quebrado, não funcionando, com alguma parte
                danificada ou seja incompatível com seu equipamento o contato
                deverá ser feito em até 24 horas pelo telefone (11) 999049747 /
                998651013 ou através do e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                Após este período a garantia será efetivada somente se o produto
                apresentar mal funcionamento por defeito de fabricação durante o
                período estabelecido na página do produto e/ou no certificado de
                garantia. O produto deverá ser encaminhado completo: embalagem,
                acessórios, manuais, certificado de garantia e nota fiscal da
                compra. Todos os produtos serão avaliados e caso não seja
                identificado defeito ou não estejam completos conforme as
                condições acima, serão reenviados aos clientes, sendo o custo do
                frete por responsabilidade do consumidor. Importante: A união
                vet só reenviará outro produto, quando o mesmo com defeito for
                devolvido, para realizarmos as avaliações técnicas necessárias,
                e detectarmos quais foram as causas de defeito e ou mal
                funcionamento do produto. Após a aprovação da troca, o prazo
                para enviarmos o novo produto é de 10 dias úteis depois do
                recebimento do produto na loja.
              </p>
            </div>
          </CollapsibleItem>
          <CollapsibleItem header="4 - Produto com Defeito (garantia)">
            <div className="text-content">
              <p className="flow-text">
                - Os produtos comercializados pela união vet possuem 30 dias de
                garantia em caso de falhas de fabricação, exceto os produtos em
                que a garantia vem especificada na descrição do mesmo. Se o item
                adquirido em nossa loja apresentar defeito após 07 (sete) dias,
                a contar da datado recebimento - mas dentro do prazo de garantia
                do fabricante, você poderá entrar em contato com o fabricante
                (informações sobre o fabricante podem ser encontradas na página
                do produto ou também através de nossa Central de Atendimento -
                telefone
                <span className="blue-text text-darken-2">
                  {" "}
                  (11) 999049747 / 998651013
                </span>
                - e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                Para comunicar a ocorrência e obter esclarecimentos, ou
                dirigirem-se a uma das Assistências Técnicas credenciadas pelo
                próprio fabricante indicadas no Manual que acompanha o produto,
                o cliente deve entrar em contato com nossa Central de
                Atendimento. Caso não consiga contato com o fabricante avise a
                nossa Central de Atendimento. - A garantia contratual é de
                inteira responsabilidade do fabricante e seu prazo e forma de
                utilização estão mencionados no Termo de Garantia que acompanha
                o produto. Veja como solicitar o pedido de avaliação de supostas
                falhas de fabricação: Devolução da Mercadoria: - A mercadoria
                deverá ser devolvida através dos correios ou transportadora,
                sendo previamente avisada a nossa Central de Atendimento. Pelo
                telefone (11) 11 9 9904 9747 / 9 98651013, ou através do e-mail
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                - Devolver o produto na embalagem original. - Obrigatoriamente,
                o cliente deverá encaminhar 1ª via da Nota Fiscal de Compra
                juntamente com o produto ou o recibo de venda. - O cliente
                deverá enviar por escrito um breve relato sobre o suposto
                defeito a que se refere a reclamação, esclarecendo a prática na
                qual foi utilizado o produto.
              </p>
            </div>
            <blockquote>
              ATENÇÃO: Produtos encaminhados fora das especificações acima não
              serão aceitos para análise de defeitos e automaticamente serão
              devolvidos ao remetente.
            </blockquote>
            <blockquote>
              Análise de defeitos dos produtos: - A avaliação de defeitos será
              realizada pelos nossos fornecedores e então será concluída a
              análise final do pedido de troca. Prazo médio de conclusão: 10
              dias úteis. Análise Favorável à troca: - O cliente receberá no
              endereço de origem, sem custos adicionais, a substituição do mesmo
              produto. - Na ausência do mesmo modelo em estoque, o cliente será
              comunicado e poderá escolher outro modelo para troca entre as
              opções existentes no site, respeitando o limite do crédito. - Se
              houver diferença de preço entre o produto escolhido e o produto
              reclamado, deverá ser providenciado o pagamento da diferença.
              Análise Contrária à troca: - O produto será devolvido sem direito
              de substituição. Itens de reprovação: - Ausência de defeito (não
              constatação do dano apontado pelo cliente). - Indícios de uso
              inadequado do produto. - Indícios de dano acidental. - Desgaste
              natural em decorrência do uso. - Uso inadequado do produto. Sendo
              o custo do frete por responsabilidade do consumidor.
            </blockquote>
          </CollapsibleItem>
          <CollapsibleItem header="5 - Produto em Desacordo com o Pedido">
            <div className="text-content">
              <p className="flow-text">
                - Caso você receba um produto diferente do produto adquirido,
                você pode optar pela troca do produto por outro igual ao que
                está descrito em seu pedido desde que seguidas às orientações
                abaixo: - Se você detectar divergência entre o produto adquirido
                e o produto recebido, você tem 24 horas para entrar em contato
                com a nossa Central de Atendimento, pelo telefone (11) 999049747
                / 998651013 ou através do e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                Solicitações fora desse prazo não serão aceitas. - A troca será
                efetivada somente após o recebimento e análise do(s) produto(s)
                devolvido(s). Constatada qualquer divergência, como ausência de
                diferença entre produto adquirido e produto entregue ou indícios
                de mau uso, a união vet fica isenta de aceitar a devolução e
                fazer a troca, podendo reenviar o produto ao cliente sem
                consulta prévia. Devolução do produto em desacordo: - A
                mercadoria deverá ser devolvida através dos correios ou
                transportadora, sendo previamente avisada a nossa Central de
                Atendimento através do e-mail{" "}
                <Link to="contato">
                  {" "}
                  <span className="blue-text text-darken-2">
                    uniaovet@hotmail.com
                  </span>
                </Link>{" "}
                , para que seja passada instruções para envio. - Devolver o
                produto em questão na embalagem original com todos os itens
                originais inclusos. - Obrigatoriamente, o cliente deverá
                encaminhar a 1ª via da Nota Fiscal de Compra juntamente com o
                produto em desacordo ou o pedido de compra. - O cliente deverá
                enviar por escrito um breve relato sobre o suposto desacordo a
                que se refere à reclamação.
              </p>
            </div>
            <blockquote>
              ATENÇÃO: Produtos encaminhados fora das especificações acima não
              serão aceitos para análise de defeitos e automaticamente serão
              devolvidos ao remetente.
            </blockquote>
            <blockquote>
              Prazo médio de conclusão: 10 dias úteis após o recebimento em
              nossa central de distribuição. - O cliente receberá no endereço de
              origem, sem custos adicionais, a substituição do produto. - Na
              ausência do mesmo modelo em estoque, o cliente será comunicado e
              poderá escolher outro modelo para troca entre as opções existentes
              no site, respeitando o limite do crédito. - Se houver diferença de
              preço entre o produto escolhido e o produto reclamado, deverá
              providenciar o pagamento ou reembolso.
            </blockquote>
          </CollapsibleItem>
        </Collapsible>
      </Col>
      <Col className="offset-s1 offset-m2" s={10} m={8}>
        <Collapsible defaultActiveKey={0}>
          <CollapsibleItem header="Equipamentos Veterinários" icon="pets">
            <Row>
              <ProductView
                thumbnail={calhaThumb}
                image={calhaProd}
                category={"Calha"}
                title={"Calha cirúrgica - Pequena"}
                text={
                  "Estrutura em aço inox formato em U, possui suporte lateral para amarração do animal, calha com inclinação para escoamento de líquido, Medidas: (AxCxL): 16 x 53 x 26 cm "
                }
                link={
                  "https://produto.mercadolivre.com.br/MLB-943434439-calha-de-inox-grande-veterinario-um-metro-_JM"
                }
              />
              <ProductView
                thumbnail={mesaPantograficaThumb}
                image={mesaPantograficaProd}
                title={"Mesa Pantográfica"}
                category={"Mesa"}
                text={
                  "Diferenciais: Este tampo permite ao Veterinário ou Veterinária a regulagem que necessitarem devido ao grande número de ajustes e regulagens que esta Mesa é capaz de fazer atráves de suas articulações e inclinições sendo em sua altura em seu inclinamento para as laterais. Regulagem de altura entre 60 cm a 1,20 cm do chão, acionamento através de pedal elétrico, possui 2 sistemas de segurança para proteção de raios e descargas de energia indesejadas."
                }
                link={
                  "https://produto.mercadolivre.com.br/MLB-950313276-mesa-pantografica-com-calha-regulavel-_JM"
                }
              />
              <ProductView
                thumbnail={suporteDeSoroThumb}
                image={suporteDeSoroProd}
                category={"Suporte"}
                title={"Suporte de soro quadripé"}
                text={
                  "Usado para pendurar bolsas de soro enquanto os pacientes recebem os medicamentos. Pés com ponteiras em borracha, altura regulável e dois ganchos para armazenar as bolsas de soro ou medicamento, capacidade mínima:  02 frascos e altura Máxima : 1,90m"
                }
                link={
                  "https://produto.mercadolivre.com.br/MLB-827274114-suporte-de-soro-quadripe-vet-animais-inox-_JM"
                }
              />
            </Row>
            <Row>
              <ProductView
                thumbnail={mesaCalhaInoxThumb}
                image={mesaCalhaInoxProd}
                category={"Mesa Calha"}
                title={"Mesa Calha Inox"}
                text={
                  "Usada em procedimentos cirúrgicos,  Possui tampos de inox de alta resistência e durabilidade com vincos que escoam os líquidos em direção ao dreno. Altura 1,14m e largura 60cm."
                }
                link={
                  "https://produto.mercadolivre.com.br/MLB-974722337-mesa-calha-para-veterinario-animais-inox-_JM"
                }
              />
              <ProductView
                thumbnail={mesaFluidoTerapiaInoxThumb}
                image={mesaFluidoTerapiaInoxProd}
                title={"Mesa Fluidoterapia"}
                category={"Fluidoterapia e Odonto"}
                text={
                  "Possui tampos de inox de alta resistência e durabilidade com vincos que escoam os líquidos em direção ao dreno. " +
                  "Comprimento 1.10m, altura 70cm a 1.00 e largura 60cm. Tampo em forma de cuba com altura de 5 cm e tela superior removível  em Inox. Pés em tubo quadrado em inox, com manípolas laterais para inclinação e regulagem da altura da mesa. " +
                  "Acompanha: suporte de soro em inox com altura regulável e removível e balde em alumínio, suporte para amarras e contenção do animal"
                }
                link={
                  "https://produto.mercadolivre.com.br/MLB-922019856-mesa-fluidoterapia-veterinario-completo-_JM"
                }
              />
              <ProductView
                thumbnail={bercoVetInoxThumb}
                image={bercoVetInoxProd}
                category={"Berço"}
                title={"Berço para animais veterinário inox"}
                text={
                  "Berço fabricado em Inox com prateleira inferior em inox, gaveta para armazenamento de materiais, suporte de soro removível, suporte para monitor cirúrgico, suporte para cilindro de 5 litros de oxigênio 'modelo de ferro', laterais removíveis com sistema manual para abaixar e levantar as laterais, rodízios giratórios. "
                }
                link={
                  "https://produto.mercadolivre.com.br/MLB-904970382-berco-para-animais-veterinario-inox-_JM"
                }
              />
            </Row>
          </CollapsibleItem>
          {/* <CollapsibleItem header="Itens" icon="pets">
              <Row>
                <ProductView
                  title={"Produtos04"}
                  text={"Texto vindo da props"}
                />
                <ProductView
                  title={"Produtos06"}
                  text={"Texto vindo da props"}
                />
                <ProductView
                  title={"Produtos07"}
                  text={"Texto vindo da props"}
                />
              </Row>
            </CollapsibleItem>
            <CollapsibleItem header="Acessórios" icon="pets">
              <Row>
                <ProductView
                  title={"Produtos08"}
                  text={"Texto vindo da props"}
                />
                <ProductView
                  title={"Produtos09"}
                  text={"Texto vindo da props"}
                />
                <ProductView
                  title={"Produtos10"}
                  text={"Texto vindo da props"}
                />
              </Row>
            </CollapsibleItem> */}
        </Collapsible>
        <hr />
      </Col>
    </Row>
  </div>
);

export default ProductsPage;
