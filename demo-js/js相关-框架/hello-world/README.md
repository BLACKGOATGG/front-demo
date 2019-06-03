# hello-world

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Host config
127.0.0.1 www.demo.com

### Nginx config
```
server
{
    listen 80;
    server_name       www.demo.com; 

    charset utf-8;
    access_log  logs/trc_h5_acc.log  main;
    error_log   logs/trc_h5_err.log  error;

    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;

    location / {
        proxy_pass http://127.0.0.1:8082/;
    }
}
```