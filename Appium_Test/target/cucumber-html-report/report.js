$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("01-BBCNews.feature");
formatter.feature({
  "line": 2,
  "name": "Navigate Video from BBC New Home and search for Article",
  "description": "",
  "id": "navigate-video-from-bbc-new-home-and-search-for-article",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Include"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "BBC News Home screen",
  "keyword": "Given "
});
formatter.match({
  "location": "BBCNews.bbc_News_Home_screen()"
});
formatter.result({
  "duration": 20483307103,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Navigate Video from BBC New Home",
  "description": "",
  "id": "navigate-video-from-bbc-new-home-and-search-for-article;navigate-video-from-bbc-new-home",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@BBCNews"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I tap on Video Tab",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I scroll down the screen",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Verify the BBC copyright",
  "keyword": "And "
});
formatter.match({
  "location": "BBCNews.i_tap_on_Video_Tab()"
});
formatter.result({
  "duration": 1012450718,
  "status": "passed"
});
formatter.match({
  "location": "BBCNews.i_scroll_down_the_screen()"
});
formatter.result({
  "duration": 7389185642,
  "status": "passed"
});
formatter.match({
  "location": "BBCNews.verify_the_BBC_copyright()"
});
formatter.result({
  "duration": 24063755,
  "status": "passed"
});
formatter.after({
  "duration": 757910933,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "BBC News Home screen",
  "keyword": "Given "
});
formatter.match({
  "location": "BBCNews.bbc_News_Home_screen()"
});
formatter.result({
  "duration": 19247760830,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Search for Article",
  "description": "",
  "id": "navigate-video-from-bbc-new-home-and-search-for-article;search-for-article",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@BBCNews"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on Search icon",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "Search topics and articles opened",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "Enter \"tourism trade is under pressure\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I click on the article",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Verify the content \"England\"",
  "keyword": "And "
});
formatter.match({
  "location": "BBCNews.i_click_on_Search_icon()"
});
formatter.result({
  "duration": 1499512054,
  "status": "passed"
});
formatter.match({
  "location": "BBCNews.search_topics_and_articles_opened()"
});
formatter.result({
  "duration": 1155786449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tourism trade is under pressure",
      "offset": 7
    }
  ],
  "location": "BBCNews.enter(String)"
});
formatter.result({
  "duration": 5125226772,
  "status": "passed"
});
formatter.match({
  "location": "BBCNews.i_click_on_the_article()"
});
formatter.result({
  "duration": 5436739877,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "England",
      "offset": 20
    }
  ],
  "location": "BBCNews.verify_the_content(String)"
});
formatter.result({
  "duration": 8173037898,
  "status": "passed"
});
formatter.after({
  "duration": 865626057,
  "status": "passed"
});
});