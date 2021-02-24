FROM node:14

WORKDIR /usr/LoanService/src

COPY /src .

COPY ["package.json", "package-lock.json", "tsconfig.build.json", "tsconfig.json", "./../"] 

RUN npm ci

RUN npm run build

EXPOSE 4200

CMD [ "npm","run","start:prod" ]