# build environment
FROM node:14.20.0 as react-build
WORKDIR /app
COPY . ./
RUN yarn
RUN yarn config set ignore-engines true
RUN yarn build
CMD ["yarn", "start"]