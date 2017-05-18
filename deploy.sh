#!/bin/bash

echo "Starting ks-neopraxis ..."

cd /opt/ks-neopraxis/

exec /usr/bin/node keystone.js >> /var/log/neopraxis.log
