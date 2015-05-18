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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("\u0027tester.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Life of IT tester",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy \r\nI want to keep my boss happy",
  "id": "life-of-it-tester",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 8,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"\u003cTesterType\u003e\" tester",
  "rows": [
    {
      "cells": [
        "Industry",
        "Country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I \"\u003cWork_Output\u003e\" it",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "My boss \"\u003cBoss_Action\u003e\" me",
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 16
    },
    {
      "cells": [
        "USA"
      ],
      "line": 17
    },
    {
      "cells": [
        "Finland"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"\u003cDeveloper_Action\u003e\" me",
  "keyword": "But "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;",
  "rows": [
    {
      "cells": [
        "TesterType",
        "Work_Output",
        "Boss_Action",
        "Developer_Action"
      ],
      "line": 23,
      "id": "life-of-it-tester;i-am-a-tester;;1"
    },
    {
      "cells": [
        "Bad",
        "Messes",
        "Hates",
        "Likes"
      ],
      "line": 24,
      "id": "life-of-it-tester;i-am-a-tester;;2"
    },
    {
      "cells": [
        "Good",
        "Completes",
        "Salutes",
        "Hates"
      ],
      "line": 25,
      "id": "life-of-it-tester;i-am-a-tester;;3"
    },
    {
      "cells": [
        "Average",
        "Sufficient",
        "Congrates",
        "Respects"
      ],
      "line": 26,
      "id": "life-of-it-tester;i-am-a-tester;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"Bad\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Industry",
        "Country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I \"Messes\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "My boss \"Hates\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 16
    },
    {
      "cells": [
        "USA"
      ],
      "line": 17
    },
    {
      "cells": [
        "Finland"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"Likes\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"Good\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Industry",
        "Country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I \"Completes\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "My boss \"Salutes\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 16
    },
    {
      "cells": [
        "USA"
      ],
      "line": 17
    },
    {
      "cells": [
        "Finland"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"Hates\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 7,
      "name": "@tester"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "I am a \"Average\" tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "Industry",
        "Country"
      ],
      "line": 10
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 11
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 12
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I \"Sufficient\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "My boss \"Congrates\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "Country"
      ],
      "line": 16
    },
    {
      "cells": [
        "USA"
      ],
      "line": 17
    },
    {
      "cells": [
        "Finland"
      ],
      "line": 18
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "The developer \"Respects\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});