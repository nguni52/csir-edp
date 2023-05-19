#!/usr/bin/env bash
if [[ -z "$1" ]]; then
    echo "Usage: ./deploy.sh (local|dev)"
else
  if [[ $1 == "dev" ]]; then
    npm run build:prod
    docker build -t nguni52/csir-edp-ui:latest .
    docker tag nguni52/csir-edp-ui:latest nguni52/csir-edp-ui:1.0.5
    docker push nguni52/csir-edp-ui:1.0.5
    docker-compose up
  fi
fi
