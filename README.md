# x-nestjs

## How to add module

[CLI Usage](https://docs.nestjs.com/cli/usages)

```sh
$ nest generate module health
$ nest generate controller health
$ nest generate service health
```

## Docker

```sh
$ docker build -t x-nestjs .
$ docker run -it --rm -p 80:3000 x-nestjs
```

```sh
$ open http://localhost/health/check
```

## License

[MIT](LICENSE)
