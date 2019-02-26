#!/usr/bin/env bash

set -e

export version=0.0.1
export containername=lukso-dapps-voting

npm run build
docker build -t $containername:$version .
docker tag $containername:$version leondroid/$containername:$version
docker push leondroid/$containername:$version
