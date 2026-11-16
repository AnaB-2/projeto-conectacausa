# Dockerfile para Web (HTML/CSS/JS ou PHP estático)
FROM nginx:alpine

# Remove a configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos do projeto web para o diretório padrão do Nginx
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]