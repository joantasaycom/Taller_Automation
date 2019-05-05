package seleniumcode;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;


public class selenium {
	
	public JavascriptExecutor js;
	public String myproyecto = System.getProperty("user.dir");
	public static WebDriver driver;
	public By txt_buscar = By.id("gh-ac");
	public By btn_buscar = By.id("gh-btn");
	public By txt_marca = By.id("w3-w0-w2-w2-0[0]");
	public By cbo_marca = By.cssSelector("#w_1557077534001_cbx");
	public By resultado = By.cssSelector(".rcnt");
    
	@Given("^usuario ingresa al Homepage$")
    public void usuario_ingresa_al_Homepage() throws Throwable {     
    	System.setProperty("webdriver.chrome.driver",myproyecto+"\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        js = (JavascriptExecutor) driver;
        driver.get("https://www.ebay.com/");
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
    }
    
	@When("^ingresar zapatos en filtro$")
    public void ingresar_zapatos_en_filtro() throws Throwable {
        driver.findElement(txt_buscar).sendKeys("Zapatos");
        Thread.sleep(1000);
    }
    
	@When("^usuario hace clic en boton buscar$")
    public void usuario_hace_clic_boton_buscar() throws Throwable {
        driver.findElement(btn_buscar).click();
        Thread.sleep(2000);
    }
  
	@When("^seleccionar marca Puma$")
    public void seleccionar_marca_Puma() throws Throwable {
		  js.executeScript("window.scrollBy(0,500)");
		  Thread.sleep(5000);
		  driver.findElement(txt_marca).sendKeys("puma");
		  Thread.sleep(1000);
		  driver.findElement(cbo_marca).click();
		  Thread.sleep(5000);
    }
	
	@Then("^imprimir resultado de busqueda$")
    public void imprimir_resultado_de_busqueda() throws Throwable {
		  
		  String imprimir;
		  System.out.println("Hemos Finalizado la búsqueda...");
		  imprimir = driver.findElement(resultado).getText();
		  System.out.println("Resultado de la búsqueda para marca en " + "Zapatos" + " es: " +  imprimir);
		  Thread.sleep(1000);
		  driver.quit();
		
    }
	
	
}
