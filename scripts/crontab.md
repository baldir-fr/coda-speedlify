# Setup crontab to run this job every 30 minutes

Edit the crontab file for the current user

```sh
crontab -e
```

```
PATH=/bin:/usr/bin:/usr/local/bin:$HOME/.nvm/versions/node/v22.17.0/bin
*/5 * * * * cd $HOME/source/Ecoles/Coda/coda-speedlify && ./scripts/scan-and-publish.sh >> /tmp/speedlify.log
```