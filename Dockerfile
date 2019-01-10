FROM copernicani/data-budget-api:2.1.0

ENV WORK_DIR /usr/src/app/
COPY config.js config.js
COPY queries/* queries/
EXPOSE 80

CMD [ "npm", "start" ]

