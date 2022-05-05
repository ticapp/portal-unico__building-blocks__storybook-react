FROM httpd:2.4.41-alpine

LABEL maintainer="ticapp.gov.pt"
LABEL tid=portalunicostorybookreact

COPY storybook-static/ /usr/local/apache2/htdocs/
COPY infrastructure/httpd.conf /usr/local/apache2/conf/httpd.conf
