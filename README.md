## ES6 W/ Docker ##

### Pontos importantes: ###

* Para que o Babel Watch funcione no docker é preciso adicionar a flag ``CHOKIDAR_USEPOLLING=true`` para poder habilidar o chokidar a escutar as mudanças de arquivos, [Link da Issue](https://github.com/babel/babel/issues/9215#issuecomment-542005459).