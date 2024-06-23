FROM node:20-alpine 

WORKDIR /

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000  

CMD ["npm", "run", "dev"]  # Start Next.js development server