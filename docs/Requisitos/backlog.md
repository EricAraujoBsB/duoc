# Backlog do Produto — DUOC

## 📋 Backlog do Produto

| Prioridade | User Story                                                                                                   | Tipo de Requisito            |
| ---------- | ------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| 🚨 **Alta** | Como visitante, quero acessar um site institucional, para conhecer a empresa DUOC e sua atuação.              | Funcional                    |
| 🚨 **Alta** | Como visitante, quero visualizar a identidade visual da DUOC, para reconhecer a marca e seus valores.        | Funcional                    |
| 🚨 **Alta** | Como visitante, quero acessar a página "Quem Somos", para entender a história, missão, visão e valores.      | Funcional                    |
| 🚨 **Alta** | Como visitante, quero visualizar os fundadores da empresa, para aumentar a confiança na equipe técnica.      | Funcional                    |
| 🚨 **Alta** | Como visitante, quero visualizar os serviços oferecidos, para entender as áreas de atuação da DUOC.          | Funcional                    |
| ⚠️ **Média** | Como visitante, quero acessar detalhes de cada serviço, para compreender escopo, benefícios e diferenciais. | Funcional                    |
| 🚨 **Alta** | Como visitante, quero visualizar projetos associados a cada serviço, para validar a experiência da empresa. | Funcional                    |
| 🚨 **Alta** | Como visitante, quero acessar o portfólio completo da DUOC, para conhecer os projetos realizados.            | Funcional                    |
| ⚠️ **Média** | Como visitante, quero filtrar projetos por categoria, para facilitar a navegação no portfólio.              | Funcional                    |
| ⚠️ **Média** | Como visitante, quero visualizar imagens dos projetos, para melhor compreensão visual.                      | Funcional                    |
| 🚨 **Alta** | Como visitante, quero acessar informações de contato, para solicitar orçamentos ou tirar dúvidas.            | Funcional                    |
| 🚨 **Alta** | Como administrador, quero autenticar no sistema, para acessar funcionalidades administrativas.               | Funcional                    |
| 🚨 **Alta** | Como administrador, quero cadastrar e editar serviços, para manter as informações atualizadas.              | Funcional                    |
| 🚨 **Alta** | Como administrador, quero cadastrar e editar projetos, para atualizar o portfólio da empresa.               | Funcional                    |
| ⚠️ **Média** | Como administrador, quero associar projetos a serviços, para manter a organização correta.                  | Funcional                    |
| ⚠️ **Média** | Como administrador, quero associar projetos a categorias, para facilitar a classificação.                  | Funcional                    |
| ⚠️ **Média** | Como administrador, quero gerenciar imagens de serviços e projetos, para manter o conteúdo visual atualizado.| Funcional                    |
| 🚨 **Alta** | Como desenvolvedor, quero garantir que o site seja responsivo, para funcionar em diferentes dispositivos.     | Não funcional (usabilidade)  |
| 🚨 **Alta** | Como desenvolvedor, quero garantir boa performance de carregamento, para melhorar a experiência do usuário. | Não funcional (desempenho)   |
| 🚨 **Alta** | Como desenvolvedor, quero garantir segurança no acesso administrativo, para proteger os dados.               | Não funcional (segurança)    |
| ⚠️ **Média** | Como colaborador, quero documentação clara do projeto, para facilitar manutenção e evolução.                | Não funcional (documentação) |

---

## ⚙️ Tecnologias Principais

- **Frontend**: Next.js (React + TypeScript)
- **Backend**: Node.js integrado ao Next.js
- **Banco de Dados**: Supabase (PostgreSQL)
- **Deploy**: Vercel
- **Gerenciamento de Código**: GitHub

---

# 🗺️ Story Map — Projeto DUOC

<table style="width: 100%; border: 1px solid black; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="border: 1px solid black;">Epics</th>
      <th style="border: 1px solid black;">Features</th>
      <th style="border: 1px solid black;">User Stories</th>
      <th style="border: 1px solid black;">Descrição</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4" style="writing-mode: vertical-lr; border: 1px solid black;">Presença Digital Institucional</td>
      <td rowspan="2" style="border: 1px solid black;">Feature 1.1: Identidade institucional</td>
      <td style="border: 1px solid black;">Como visitante, quero conhecer a DUOC e sua identidade institucional.</td>
      <td style="border: 1px solid black;">Apresenta a empresa, seus valores, missão e visão.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como visitante, quero visualizar os fundadores da empresa.</td>
      <td style="border: 1px solid black;">Gera confiança ao apresentar a equipe técnica.</td>
    </tr>
    <tr>
      <td rowspan="2" style="border: 1px solid black;">Feature 1.2: Serviços</td>
      <td style="border: 1px solid black;">Como visitante, quero visualizar os serviços oferecidos.</td>
      <td style="border: 1px solid black;">Apresenta as áreas de atuação da DUOC.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como visitante, quero acessar detalhes dos serviços.</td>
      <td style="border: 1px solid black;">Exibe escopo, benefícios e diferenciais.</td>
    </tr>
    <tr>
      <td rowspan="4" style="writing-mode: vertical-lr; border: 1px solid black;">Portfólio e Projetos</td>
      <td rowspan="2" style="border: 1px solid black;">Feature 2.1: Portfólio</td>
      <td style="border: 1px solid black;">Como visitante, quero acessar o portfólio completo.</td>
      <td style="border: 1px solid black;">Exibe todos os projetos realizados.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como visitante, quero visualizar imagens dos projetos.</td>
      <td style="border: 1px solid black;">Facilita o entendimento visual dos projetos.</td>
    </tr>
    <tr>
      <td rowspan="2" style="border: 1px solid black;">Feature 2.2: Classificação de projetos</td>
      <td style="border: 1px solid black;">Como visitante, quero filtrar projetos por categoria.</td>
      <td style="border: 1px solid black;">Facilita a navegação no portfólio.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como visitante, quero visualizar projetos relacionados a serviços.</td>
      <td style="border: 1px solid black;">Relaciona serviços à experiência prática.</td>
    </tr>
    <tr>
      <td rowspan="4" style="writing-mode: vertical-lr; border: 1px solid black;">Administração do Conteúdo</td>
      <td rowspan="2" style="border: 1px solid black;">Feature 3.1: Gestão de conteúdo</td>
      <td style="border: 1px solid black;">Como administrador, quero gerenciar serviços.</td>
      <td style="border: 1px solid black;">Permite atualizar serviços apresentados no site.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como administrador, quero gerenciar projetos.</td>
      <td style="border: 1px solid black;">Permite manter o portfólio atualizado.</td>
    </tr>
    <tr>
      <td rowspan="2" style="border: 1px solid black;">Feature 3.2: Segurança e acesso</td>
      <td style="border: 1px solid black;">Como administrador, quero autenticar no sistema.</td>
      <td style="border: 1px solid black;">Garante acesso seguro às funções administrativas.</td>
    </tr>
    <tr>
      <td style="border: 1px solid black;">Como desenvolvedor, quero proteger os dados administrativos.</td>
      <td style="border: 1px solid black;">Assegura a integridade e segurança das informações.</td>
    </tr>
  </tbody>
</table>

---

## ⭐ Funcionalidades Prioritárias

- Apresentação institucional da DUOC
- Exibição dos serviços e seus detalhes
- Portfólio completo com projetos e imagens
- Responsividade e performance
