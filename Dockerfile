FROM node:12.10-alpine


# create root application folder
WORKDIR /app


COPY package*.json ./
RUN npm install

# copy source code to /app/src folder
ADD . .

RUN npm run build


# check files list
RUN ls dist -a

# expose server and debug port
EXPOSE 7777



# run application
# CMD ["node", "src/index.js"]
CMD npm run start:dev