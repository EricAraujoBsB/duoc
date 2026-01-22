# VISÃO DO PRODUTO — DUOC

---

## 1. CENÁRIO ATUAL DO CLIENTE E DO NEGÓCIO

### 1.1 Introdução ao Negócio e Contexto

A DUOC é uma nova empresa originada a partir de uma ideia central que priorizava um posicionamento estratégico especializado em sistemas fotovoltaicos para projetos residenciais, autarquias e empresas de médio e grande porte, sendo que agora seu foco está voltado para construções civis, projetos arquitetônicos, instalações elétricas, hidrossanitárias e em soluções de automação residencial e empresarial (IoT), alinhadas às demandas atuais do mercado e às melhores práticas do setor.

Com essa refatoração a empresa passa a direcionar suas atividades para uma atuação mais abrangente e integrada oferecendo diversos serviços ao seu público alvo.

Portanto, por ser uma empresa recém fundada a DUOC ainda não dispõe de um posicionamento eficaz nos meios digitais que transpareça ao público sua identidade, serviços e contato, algo que já está presente em muitas empresas concorrentes, o que prejudica bastante a empresa no seu âmbito de negócio.

---

### 1.2 Identificação da Oportunidade e Problema

A principal oportunidade identificada para a DUOC perdura na ideia de viabilizar a visibilidade da identidade da empresa juntamente com seus serviços e contatos para que seja possível alcançar novos clientes, pois atualmente a empresa não possui presença estabelecida de forma clara no meio digital.

A DUOC encara essa oportunidade como algo essencial para seu negócio pois hoje em dia em uma sociedade altamente digitalizada a ausência de presença digital eficaz ocasiona uma perda significativa no lucro da empresa.

A figura a seguir diz respeito ao Diagrama de Ishikawa (Diagrama de Causa e Efeito) expressando as causas (através dos 6M’s) e o problema identificado.

Os 6M’s servem para identificar:

- Método  
- Matéria-Prima  
- Mão de Obra  
- Máquinas  
- Medidas  
- Meio Ambiente  

---

### 1.3 Desafios do Projeto

O principal desafio do projeto é agregar valor à DUOC com o produto a ser desenvolvido, assegurando que sua identidade seja transmitida ao público de forma eficaz à fim de gerar conversão à empresa.

Entende-se também como desafio a equipe reduzida contendo somente 2 desenvolvedores, mas que possuem experiência com desenvolvimento e principalmente com a stack definida para o projeto.

---

### 1.4 Segmentação de Clientes

- Autarquias (30–60 anos)  
- Empresas Privadas (20–60 anos)  
- Pessoa Física – Residencial (20–60 anos)  

---

## 2. SOLUÇÃO PROPOSTA

### 2.1 Objetivos do Produto

| Código | Objetivo |
|------|---------|
| OE1 | Fortalecer a credibilidade técnica da empresa |
| OE2 | Apresentar os serviços prestados |
| OE3 | Demonstrar a experiência prática |
| OE4 | Facilitar o contato |
| OE5 | Garantir autonomia de gerenciamento |
| OE6 | Ampliar a visibilidade digital |

---

### 2.2 Características da Solução

| Objetivo Específico | Código | Característica da Solução |
|--------------------|--------|----------------------------|
| OE1 | CS1 | O produto deverá apresentar de forma clara e profissional a identidade institucional da DUOC, evidenciando sua atuação nas áreas de engenharia, construção civil, sistemas fotovoltaicos e automação. |
| OE1 | CS2 | O produto deverá apresentar de forma clara e profissional os principais integrantes da equipe DUOC. |
| OE1 | CS3 | O produto deverá destacar os diferenciais que garantem a qualidade técnica da DUOC. |
| OE1 | CS4 | O produto deverá evidenciar parcerias estratégicas e vínculos institucionais, reforçando a credibilidade da empresa perante potenciais clientes. |
| OE2 | CS5 | O produto deverá disponibilizar uma apresentação estruturada e organizada dos serviços oferecidos pela DUOC, contemplando suas diferentes áreas de atuação. |
| OE2 | CS6 | O produto deverá permitir que o visitante compreenda, de forma simples e objetiva o serviço a ser prestado, destacando o valor agregado pela DUOC em relação às soluções disponíveis no mercado. |
| OE3 | CS7 | O produto deverá disponibilizar uma apresentação estruturada e organizada dos projetos já realizados pela DUOC, contemplando suas diferentes áreas de atuação. |
| OE3 | CS8 | O produto deverá permitir que o visitante compreenda, de forma simples e objetiva o projeto já finalizado, destacando o valor agregado pela DUOC em relação às soluções disponíveis no mercado. |
| OE4 | CS9 | O produto deverá disponibilizar informações que apoiem a solicitação de orçamentos. |
| OE4 | CS10 | O produto deverá disponibilizar informações que orientem o usuário no esclarecimento de dúvidas. |
| OE4 | CS11 | O produto deve disponibilizar meios de contato entre o cliente e a DUOC. |
| OE5 | CS12 | O produto deverá oferecer mecanismos que garantam controle de acesso às funcionalidades administrativas da solução. |
| OE5 | CS13 | O produto deverá permitir que a DUOC mantenha e atualize seus projetos já finalizados de forma independente. |
| OE6 | CS14 | O produto deverá favorecer a visibilidade das informações institucionais da DUOC no ambiente digital. |
| OE6 | CS15 | O produto deverá possibilitar o acesso às informações da DUOC em diferentes dispositivos. |

---

### 2.3 Tecnologias a Serem Utilizadas

**Frontend + Backend:**
- Next.js: O frontend será implementado dentro do próprio projeto Next.js utilizando React que será responsável por renderizar as páginas da aplicação para os usuários.
- Next.js: O backend será implementado dentro do próprio projeto Next.js, utilizando Node.js + TypeScript.

**Database:**
- Supabase: Banco de dados PostgreSQL gerenciado na nuvem.

**Deploy:**
- Vercel: Plataforma de hospedagem que suporta Next.js nativamente. Será responsável por colocar frontend e backend no ar de forma integrada, com deploy contínuo a partir do GitHub.


---

## 3. ESTRATÉGIAS DE ENGENHARIA DE SOFTWARE

### 3.1 Estratégia Priorizada

- **Abordagem:** Ágil  
- **Ciclo de Vida:** Incremental e Iterativo  
- **Processo:** ScrumXP  

---

### 3.2 Justificativa

Com base nas características do projeto, o processo ScrumXP é mais indicado devido aos seguintes fatores:

1. Flexibilidade e entregas rápidas que agregam valor ao negócio.  
2. Adoção de práticas voltadas à alta qualidade técnica do produto desenvolvido.  

---

## 4. ENGENHARIA DE REQUISITOS

A Engenharia de Requisitos compreende as atividades responsáveis por garantir que o produto desenvolvido atenda às necessidades do negócio e dos usuários finais, incluindo o levantamento, análise, documentação, validação e gerenciamento dos requisitos ao longo do ciclo de vida do projeto.
