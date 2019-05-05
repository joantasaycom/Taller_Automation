$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Autor: Joan Tasayco"
    }
  ],
  "line": 2,
  "name": "Buscar Producto en tienda Ebay.com",
  "description": "",
  "id": "buscar-producto-en-tienda-ebay.com",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Buscar producto en Ebay.com",
  "description": "",
  "id": "buscar-producto-en-tienda-ebay.com;buscar-producto-en-ebay.com",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "usuario ingresa al Homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "ingresar zapatos en filtro",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usuario hace clic en boton buscar",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "seleccionar marca Puma",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "imprimir resultado de busqueda",
  "keyword": "Then "
});
formatter.match({
  "location": "selenium.usuario_ingresa_al_Homepage()"
});
formatter.result({
  "duration": 81170702200,
  "status": "passed"
});
formatter.match({
  "location": "selenium.ingresar_zapatos_en_filtro()"
});
formatter.result({
  "duration": 30621716300,
  "status": "passed"
});
formatter.match({
  "location": "selenium.usuario_hace_clic_boton_buscar()"
});
formatter.result({
  "duration": 98175031000,
  "status": "passed"
});
formatter.match({
  "location": "selenium.seleccionar_marca_Puma()"
});
formatter.result({
  "duration": 19320293900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#w_1557077534001_cbx\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d2.42.591088 (7b2b2dca23cca0862f674758c9a3933e685c27d5),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.7.0\u0027, revision: \u00272321c73\u0027, time: \u00272017-11-02T22:22:35.584Z\u0027\nSystem info: host: \u0027DESKTOP-U4S54UM\u0027, ip: \u0027172.22.182.209\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_91\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.42.591088 (7b2b2dca23cca0..., userDataDir: C:\\Users\\USUARIO\\AppData\\Lo...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:58572}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: 7f4416db6b1de74c9b9df28a1072098e\n*** Element info: {Using\u003dcss selector, value\u003d#w_1557077534001_cbx}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:600)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:370)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:464)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:430)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:362)\r\n\tat seleniumcode.selenium.seleccionar_marca_Puma(selenium.java:53)\r\n\tat ✽.When seleccionar marca Puma(Test.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "selenium.imprimir_resultado_de_busqueda()"
});
formatter.result({
  "status": "skipped"
});
});