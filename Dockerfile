# Estágio de build
FROM node:20-alpine as builder

# Define o diretório de trabalho
WORKDIR /app

# Copia apenas os arquivos de configuração do projeto para aproveitar cache do Docker
COPY package*.json ./

# Instala as dependências, configurando timeout e retries
RUN npm install

# Copia todo o código fonte
COPY . .

# Compila o projeto
RUN npm run build

# Estágio de produção
FROM nginx:alpine

# Copia os arquivos compilados do estágio anterior
COPY --from=builder /app/dist/alfescola /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Inicia o nginx
CMD ["nginx", "-g", "daemon off;"]
