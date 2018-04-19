@Include
Feature: Navigate Video from BBC New Home and search for Article

Background:
     Given BBC News Home screen
@BBCNews
Scenario: Navigate Video from BBC New Home
	Then I tap on Video Tab
	Then I scroll down the screen
    And Verify the BBC copyright
    
@BBCNews   
Scenario: Search for Article
	When I click on Search icon
	Then Search topics and articles opened  
	Then Enter "tourism trade is under pressure" 
	Then I click on the article
    And Verify the content "England"