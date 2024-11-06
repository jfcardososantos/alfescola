# Usar uma imagem base do Node.js
FROM node:20-alpine AS build

# Definir diretório de trabalho
WORKDIR /app

# Copiar os arquivos do projeto
COPY package*.json ./

RUN npm install --legacy-peer-deps --loglevel=error

COPY . .

# Construa o projeto Angular
RUN npm run build -- --configuration production

# Use a imagem oficial do Nginx para servir o aplicativo
FROM nginx:alpine

# Copie os arquivos construídos do Angular para o diretório padrão do Nginx
COPY --from=build /app/dist/alfescola/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

# Exponha a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
