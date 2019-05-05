#Autor: Joan Paul Tasayco Mamani
#Fecha: Mayo 2019
Feature: Buscar Producto en tienda Ebay.com
  
  Scenario: Buscar producto en Ebay.com
    Given usuario ingresa al Homepage
    When  ingresar zapatos en filtro
    When  usuario hace clic en boton buscar
    When  seleccionar marca Puma
    Then  imprimir resultado de busqueda