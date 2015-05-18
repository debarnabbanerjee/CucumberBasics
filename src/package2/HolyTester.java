package package2;

import java.util.List;
import java.util.Map;




import org.apache.log4j.Logger;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.But;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HolyTester {
	
	Logger APP_LOGS = Logger.getLogger("devpinoyLogger");
	
	@Given("^I am a \"([a-zA-Z]{1,})\" tester$")
	public void I_am_a_bad_tester(String testerType,DataTable table){
		System.out.println("********************************************");
		List<Map<String,String>>data = table.asMaps();		
		APP_LOGS.debug("@Given - I am a "+testerType+" tester in " + data.get(0).get("Industry") + " industry in country " + data.get(0).get("Country"));
		APP_LOGS.debug("@Given - I am a "+testerType+" tester in " + data.get(1).get("Industry") + " industry in country " + data.get(1).get("Country"));
		APP_LOGS.debug("@Given - I am a "+testerType+" tester.");
	}
	
	@When("^I go to work$")
	public void i_go_to_work(){
		APP_LOGS.debug("@When - I go to work");
	}
	
	@Then("^I \"([a-zA-Z]{1,})\" it$")
	public void i_mess_with_it(String workOutput){		
		APP_LOGS.debug("@Then - I "+workOutput+" it");
	}
	
	@And("^My boss \"([a-zA-Z]{1,})\" me$")
	public void my_boss_fires_me(String bossAction , DataTable table){
		List<Map<String,String>>data = table.asMaps();
		APP_LOGS.debug("@And - My boss "+bossAction+" me in country -  " + data.get(0).get("Country"));
		APP_LOGS.debug("@And - My boss "+bossAction+" me in country -  " + data.get(1).get("Country"));
		APP_LOGS.debug("@And - My boss "+bossAction+" me");
	}
	
	@But("^The developer \"([a-zA-Z]{1,})\" me$")
	public void the_developer_likes_me(String developerAction){
		APP_LOGS.debug("@But - the developer "+developerAction+" me");
	}

}
