FROM node:14

WORKDIR /usr/LoanService/src

COPY /src .

COPY ["package.json", "package-lock.json", "tsconfig.build.json", "tsconfig.json", "./../"] 

RUN npm ci

RUN npm run build

EXPOSE 4200

## THE LIFE SAVER
ADD https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

## Launch the wait tool and then your application
CMD /wait && npm run start:prod