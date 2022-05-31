var express = require('express');
var router = express.Router();
var axios = require('axios');
var apiKey = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTRlY2VhNmI1ZDVjMjQ3NmNmMDhiMSIsImxldmVsIjozLjUsImVudGlkYWRlIjoiZW50X0EzRVMiLCJlbWFpbCI6InJwY3cyMDIyQGdtYWlsLmNvbSIsImlhdCI6MTY1NDAxNDk2NSwiZXhwIjoxNjU0MDQzNzY1fQ.TQ7lt_11rVVov6iskSPODoxk6iyv5cFD11Lrxc_6Kt0NMqkTTvTYf2_jw3EsEH3vMw_ZRSrEmvL4-gbL_GFMDRGYz_2wOE7nKbV3md3BWPM9WkU3pN9ZaFIqKqLTTYaItqnHSx9C4_qOnY1bAJRn0W7j9q-HKBmt796BGryQbkrq1G0L0m8w8dfhucn_JfYdOuMoT1MvyUQbC8x-lBl2ORJUplhSCeiDt0JOXW8BEZut83qTYnAx65wI5VIL3OEeljoLhx_qFK7Ix2H2t5DgZMG4ERP4ZSFUTDQ-Dnjl7PhF0Oy-tfH2_5W40KPP1Sd4RiJHJmjTd44GM3LZ_Q9cQg"

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Página Inicial' });
});

router.get('/classes', function (req, res, next) {
  axios.get("http://clav-api.di.uminho.pt/v2/classes?nivel=1&token=" + apiKey)
    .then(response => {
      var lista = response.data
      res.render('nivel', { dados: lista })
    })
    .catch(function (erro) {
      res.render('error', { erro: 'erro' });
    })
});


router.get('/classes/:code', function (req, res, next) {
  al = req.params.code
  axios.get("http://clav-api.di.uminho.pt/v2/classes/c" + al + "?token=" + apiKey)
    .then(response => {
      var lista = response.data
      res.render('classes', { dados: lista })
    })
    .catch(function (erro) {
      res.render('error', { erro: 'erro' });
    })
});

router.get('/termos', function (req, res, next) {
  al = req.params.code
  axios.get("http://clav-api.di.uminho.pt/v2/termosIndice?token=" + apiKey)
    .then(response => {
      var lista = response.data
      res.render('indice', { dados: lista })
    })
    .catch(function (erro) {
      res.render('error', { erro: 'erro' });
    })
});

module.exports = router;