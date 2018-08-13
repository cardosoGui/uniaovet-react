import React from "react";
import { Row, Col, Collapsible, CollapsibleItem } from "react-materialize";
import ProductView from "../utils/ProductView";

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
          <h4>Aqui, queremos ganhar a atenção do nosso cliente</h4>
        </div>
        <div className="text-content">
          <p>
            Por isso, aqui vamos escrever, promoções e outras coisas que possam
            interessar nossos clientes, como por exemplo, podemos dar destaque
            aos produtos que mais são vendidos, além de falar dos serviços
            também.
          </p>
          <Collapsible defaultActiveKey={0}>
            <CollapsibleItem header="Equipamentos Veterinários" icon="pets">
              <Row>
                <ProductView
                  thumbnail={calhaThumb}
                  image={calhaProd}
                  category={"Calha"}
                  title={"Calha cirúrgica - Pequena"}
                  text={
                    "aço inox no formato em U, estrutura em aço inox, possui suporte lateral para amarração do animal, calha com inclinação para escoamento de líquido, Medidas: (AxCxL): 16 x 53 x 26 cm "
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
        </div>
        <hr />
      </Col>
    </Row>
  </div>
);

export default ProductsPage;
