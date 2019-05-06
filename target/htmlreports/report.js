$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Autor: Joan Paul Tasayco Mamani"
    },
    {
      "line": 2,
      "value": "#Fecha: Mayo 2019"
    }
  ],
  "line": 3,
  "name": "Buscar Producto en tienda Ebay.com",
  "description": "",
  "id": "buscar-producto-en-tienda-ebay.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Buscar producto en Ebay.com",
  "description": "",
  "id": "buscar-producto-en-tienda-ebay.com;buscar-producto-en-ebay.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "usuario ingresa al Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "ingresar zapatos en filtro",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "usuario hace clic en boton buscar",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "imprimir resultado de busqueda en consola",
  "keyword": "Then "
});
formatter.match({
  "location": "selenium.usuario_ingresa_al_Homepage()"
});
formatter.result({
  "duration": 83563090000,
  "status": "passed"
});
formatter.match({
  "location": "selenium.ingresar_zapatos_en_filtro()"
});
formatter.result({
  "duration": 24757353000,
  "status": "passed"
});
formatter.match({
  "location": "selenium.usuario_hace_clic_boton_buscar()"
});
formatter.result({
  "duration": 86740728900,
  "status": "passed"
});
formatter.match({
  "location": "selenium.imprimir_resultado_de_busqueda_en_consola()"
});
formatter.result({
  "duration": 1179425400,
  "status": "passed"
});
});