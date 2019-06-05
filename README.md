# Dashingsoft
Dashingsoft web home page.

## https 域名配置

使用 `letsencrypt` 配置免费的 https 域名::

    cd /opt
    git clone https://github.com/letsencrypt/letsencrypt

    cd letsencrypt
    ./certbot-auto --no-self-upgrade

根据提示选择需要配置的域名，这种方式最简单。

添加自动更新脚本，每周一早上 5 点执行一次::

    crontab -e

    0 5 * * 1 /opt/letsencrypt/certbot-auto --no-self-upgrade renew

注意要使用 `--no-self-upgrade` ，否则会自动升级，而升级失败会导致无法正常更新。

升级失败解决方法，例如 升级到 `0.35.0` 的时候失败，无法找到对应的包，
那么使用下面的方式恢复到以前的版本 `0.34.0`::

    cd /opt/letsencrypt
    git checkout v0.34.0
    ./certbot-auto --no-self-upgrade
