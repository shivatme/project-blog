FROM node:20

WORKDIR /app

COPY . .

RUN cd backend
RUN npm install
RUN npm run build
RUN cd ../frontend
RUN npm install
RUN npm run build

EXPOSE 3000

CMD ["node", "backend/dist/index.js"]