package seleniumcode;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class selenium {
	
	public JavascriptExecutor js;
	public String myproyecto = System.getProperty("user.dir");
	public static WebDriver driver;
	public By txt_buscar = By.id("gh-ac");
	public By btn_buscar = By.id("gh-btn");
	public By resultado = By.cssSelector("#w4 > div:nth-child(2) > div > div.srp-controls__control.srp-controls__count > h1");
    
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
  
	@Then("^imprimir resultado de busqueda en consola$")
    public void imprimir_resultado_de_busqueda_en_consola() throws Throwable {
		  
		  String imprimir;
		  System.out.println("Hemos Finalizado la búsqueda...");
		  imprimir = driver.findElement(resultado).getText();
		  System.out.println("La busqueda de " + "Zapatos" + " es: " +  imprimir);
		  Thread.sleep(1000);
		  driver.quit();
		  
    }
	
}
