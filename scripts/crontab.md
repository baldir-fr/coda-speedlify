# Setup crontab to run this job every 30 minutes

Edit the crontab file for the current user

```sh
crontab -e
```

```
30,0 * * * * cd $HOME/source/Ecoles/Coda/coda-speedlify && ./scripts/scan-and-publish.sh >> /tmp/speedlify.log
```