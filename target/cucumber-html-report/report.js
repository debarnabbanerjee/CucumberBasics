$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027developer.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Life of IT developer",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy \r\nI want to keep my boss happy",
  "id": "life-of-it-developer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "I am a java developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-java-developer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@javaDev"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I work in Microsoft",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I meet Bill Gates",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I hesitate",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "He is a good person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft",
      "offset": 10
    }
  ],
  "location": "HolyDeveloper.I_work_in_microsoft(String)"
});
formatter.result({
  "duration": 180001614,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bill Gates",
      "offset": 7
    }
  ],
  "location": "HolyDeveloper.when_I_meet(String)"
});
formatter.result({
  "duration": 272439,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "hesitate",
      "offset": 2
    }
  ],
  "location": "HolyDeveloper.then_I(String)"
});
formatter.result({
  "duration": 267773,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.he_is_a(String)"
});
formatter.result({
  "duration": 265441,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "I am a linux developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-linux-developer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@linuxDev"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I work in Apple",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I meet Steve Jobs",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I scream",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "He is a wise person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Apple",
      "offset": 10
    }
  ],
  "location": "HolyDeveloper.I_work_in_microsoft(String)"
});
formatter.result({
  "duration": 394197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Steve Jobs",
      "offset": 7
    }
  ],
  "location": "HolyDeveloper.when_I_meet(String)"
});
formatter.result({
  "duration": 257043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scream",
      "offset": 2
    }
  ],
  "location": "HolyDeveloper.then_I(String)"
});
formatter.result({
  "duration": 310225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "wise",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.he_is_a(String)"
});
formatter.result({
  "duration": 392797,
  "status": "passed"
});
formatter.uri("\u0027tester.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Life of IT tester",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy \r\nI want to keep my boss happy",
  "id": "life-of-it-tester",
  "keyword": "Feature"
});
});