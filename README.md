![logo](https://github.com/mygk-bea/Inovaccine/assets/100007869/1a07a530-a52e-4fb9-a745-0cfd78cb523f)

### Plataforma de Gestão de Vacinação Digital  
---

## 📚 **Sumário**
1. [Descrição do Projeto](#descrição-do-projeto)
2. [Funcionalidades Principais](#funcionalidades-principais)
3. [Tecnologias Utilizadas](#tecnologias-utilizadas)
4. [Instalação e Configuração](#instalação-e-configuração)
    - [Rodando o Back-End (Laravel)](#rodando-o-back-end-laravel)
    - [Rodando o Front-End (Angular)](#rodando-o-front-end-angular)
5. [Contato](#contato)

---

<a name="descrição-do-projeto"></a>
## 📜 **Descrição do Projeto**  
O **Inovaccine** é uma solução digital para a gestão de clínicas e carteiras de vacinação. Desenvolvida com **Laravel** (back-end) e **Angular** (front-end), a plataforma visa modernizar o acesso à informação de vacinação, facilitando a vida de usuários e profissionais de saúde.

---

<a name="funcionalidades-principais"></a>
## 🚀 **Funcionalidades Principais**  
- 📅 **Gestão de agendamentos de vacinação**.  
- 🩺 **Carteira de vacinação digital** acessível a qualquer momento.  
- 📊 **Painel administrativo** para acompanhamento de registros.

---

<a name="tecnologias-utilizadas"></a>
## 🛠️ **Tecnologias Utilizadas**  
- **Back-end**: Laravel (PHP)  
- **Front-end**: Angular  
- **Gerenciador de Pacotes**: Composer e npm  
- **Banco de Dados**: MySQL  

---
<a name="instalação-e-configuração"></a>
## ⚙️ **Instalação e Configuração**  

### **Pré-requisitos**  
Antes de começar, você precisa ter instalados:  
- [Composer](https://getcomposer.org/)  
- [Node.js](https://nodejs.org/)  
- [Angular CLI](https://angular.io/cli)  

---

<a name="rodando-o-back-end-laravel"></a>
### 🔧 **Rodando o Back-End (Laravel)**  
1. **Clone o repositório**:  
   ```bash
   git clone https://github.com/mygk-bea/inovaccine.git
   cd inovaccine/backEnd
   ```

2. **Instale as dependências**:  
   ```bash
   composer install
   ```

3. **Crie o banco de dados e execute as migrações**:  
   ```bash
   php artisan migrate
   php artisan db:seed
   ```

4. **Rode o servidor local**:  
   ```bash
   php artisan serve
   ```

O servidor estará disponível em `http://localhost:8000`.

---

<a name="rodando-o-front-end-angular"></a>
### 🖥️ **Rodando o Front-End (Angular)**  
1. **Navegue até a pasta do Front-End**:  
   ```bash
   cd inovaccine/frontEndAdmin
   ```

2. **Instale as dependências**:  
   ```bash
   npm install
   ```

3. **Instale o Angular CLI globalmente** (caso ainda não tenha):  
   ```bash
   npm install -g @angular/cli
   ```

4. **Inicie o projeto**:  
   ```bash
   ng serve
   ```

O front-end estará disponível em `http://localhost:4200`.

---

<a name="contato"></a>
## 📬 **Contato**  
- **Equipe**: Beatriz Meyagusko, Júlia Victória Bueno, Thayná Marostica e Vitor Henrique Fantes  
- **LinkedIn**: [Beatriz](https://www.linkedin.com/in/beatriz-meyagusko-90b219298/), [Júlia](https://www.linkedin.com/in/j%C3%BAlia-bueno-93237830a/), [Thayná](https://www.linkedin.com/in/thayn%C3%A1-marostica-3b380b2a2/) e [Vitor](https://www.linkedin.com/in/vh-fantes/)

---
