$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("\u0027package2\\developer.feature\u0027");
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
  "duration": 326898899,
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
  "duration": 171672,
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
  "duration": 146014,
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
  "duration": 148347,
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
  "duration": 271503,
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
  "duration": 134352,
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
  "duration": 133885,
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
  "duration": 172605,
  "status": "passed"
});
formatter.uri("\u0027package2\\tester.feature\u0027");
formatter.feature({
  "line": 1,
  "name": "Life of IT tester",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy \r\nI want to keep my boss happy",
  "id": "life-of-it-tester",
  "keyword": "Feature"
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
formatter.match({
  "arguments": [
    {
      "val": "Bad",
      "offset": 8
    }
  ],
  "location": "HolyTester.I_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "duration": 2191150,
  "status": "passed"
});
formatter.match({
  "location": "HolyTester.i_go_to_work()"
});
formatter.result({
  "duration": 103097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Messes",
      "offset": 3
    }
  ],
  "location": "HolyTester.i_mess_with_it(String)"
});
formatter.result({
  "duration": 130154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hates",
      "offset": 9
    }
  ],
  "location": "HolyTester.my_boss_fires_me(String,DataTable)"
});
formatter.result({
  "duration": 327483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Likes",
      "offset": 15
    }
  ],
  "location": "HolyTester.the_developer_likes_me(String)"
});
formatter.result({
  "duration": 134352,
  "status": "passed"
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
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 8
    }
  ],
  "location": "HolyTester.I_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "duration": 462301,
  "status": "passed"
});
formatter.match({
  "location": "HolyTester.i_go_to_work()"
});
formatter.result({
  "duration": 86769,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Completes",
      "offset": 3
    }
  ],
  "location": "HolyTester.i_mess_with_it(String)"
});
formatter.result({
  "duration": 164208,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Salutes",
      "offset": 9
    }
  ],
  "location": "HolyTester.my_boss_fires_me(String,DataTable)"
});
formatter.result({
  "duration": 369002,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hates",
      "offset": 15
    }
  ],
  "location": "HolyTester.the_developer_likes_me(String)"
});
formatter.result({
  "duration": 155344,
  "status": "passed"
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
formatter.match({
  "arguments": [
    {
      "val": "Average",
      "offset": 8
    }
  ],
  "location": "HolyTester.I_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "duration": 471165,
  "status": "passed"
});
formatter.match({
  "location": "HolyTester.i_go_to_work()"
});
formatter.result({
  "duration": 92367,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sufficient",
      "offset": 3
    }
  ],
  "location": "HolyTester.i_mess_with_it(String)"
});
formatter.result({
  "duration": 253309,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Congrates",
      "offset": 9
    }
  ],
  "location": "HolyTester.my_boss_fires_me(String,DataTable)"
});
formatter.result({
  "duration": 365736,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Respects",
      "offset": 15
    }
  ],
  "location": "HolyTester.the_developer_likes_me(String)"
});
formatter.result({
  "duration": 129687,
  "status": "passed"
});
});