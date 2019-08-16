# Aphasia website

Generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.8. Redesign of [Rik](https://gitlab.com/Theunissen) website https://gitlab.com/dhh---aphasia/website using [Material Design](https://material.angular.io/).

## Development server

```shell
npm install 
ng serve
```

* Navigate to [http://localhost:4200/](http://localhost:4200/)
* The app should automatically reload if you change any of the source files.

## Generate new components

```shell
ng generate component the-component-name
```

## Build

```shell
ng build --prod

docker build -t aphasia-website .

# TODO: not working
docker run -it -p 80:8080 --network bridge \
  -e "DB_HOST=postgres" -e "DB_PORT=5432" \
  -e "GOOGLE_CLIENT_ID=9999999.apps.googleusercontent.com" \
  -e "GOOGLE_CLIENT_SECRET=my_secret" \
  -e "ORCID_CLIENT_ID=APP-AAAA99" \
  -e "ORCID_CLIENT_SECRET=my_uuid" \
  -e "ORCID_CLIENT_REDIRECT_URI=http://localhost/login/oauth2/code/orcid" \
  aphasia-website
```