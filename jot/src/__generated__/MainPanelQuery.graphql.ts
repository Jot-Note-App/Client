/**
 * @generated SignedSource<<27ebba72e03c0fd3c887e243f8b1b396>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainPanelQuery$variables = {
  after?: string | null | undefined;
  journalId?: string | null | undefined;
  search?: string | null | undefined;
};
export type MainPanelQuery$data = {
  readonly user: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"MainPanelEntriesFeedFragment" | "MainPanelJournalSelectorFragment">;
  };
};
export type MainPanelQuery = {
  response: MainPanelQuery$data;
  variables: MainPanelQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "after"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "journalId"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "search"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "kind": "Variable",
  "name": "after",
  "variableName": "after"
},
v3 = {
  "kind": "Variable",
  "name": "id",
  "variableName": "journalId"
},
v4 = {
  "kind": "Variable",
  "name": "search",
  "variableName": "search"
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
},
v11 = [
  (v2/*: any*/),
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  },
  (v4/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MainPanelJournalSelectorFragment"
          },
          {
            "args": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "MainPanelEntriesFeedFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainPanelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          {
            "alias": "journalSelectorJournals",
            "args": (v5/*: any*/),
            "concreteType": "JournalConnection",
            "kind": "LinkedField",
            "name": "journals",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JournalEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Journal",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "ordinal",
                        "storageKey": null
                      },
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v8/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  (v9/*: any*/),
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "journals(first:100)"
          },
          {
            "alias": "journalSelectorJournals",
            "args": (v5/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "MainPanelJournalSelectorFragment_journalSelectorJournals",
            "kind": "LinkedHandle",
            "name": "journals"
          },
          {
            "alias": "entriesFeedJournals",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              },
              (v3/*: any*/)
            ],
            "concreteType": "JournalConnection",
            "kind": "LinkedField",
            "name": "journals",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "JournalEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Journal",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": (v11/*: any*/),
                        "concreteType": "EntryConnection",
                        "kind": "LinkedField",
                        "name": "entries",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "PageInfo",
                            "kind": "LinkedField",
                            "name": "pageInfo",
                            "plural": false,
                            "selections": [
                              (v10/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "EntryEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Entry",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v1/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "title",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "createdAt",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "updatedAt",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "content",
                                    "storageKey": null
                                  },
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v8/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v11/*: any*/),
                        "filters": [
                          "search"
                        ],
                        "handle": "connection",
                        "key": "MainPanelEntriesFeedFragment_entries",
                        "kind": "LinkedHandle",
                        "name": "entries"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9f2f250052fcd57b69d197201f5aee67",
    "id": null,
    "metadata": {},
    "name": "MainPanelQuery",
    "operationKind": "query",
    "text": "query MainPanelQuery(\n  $after: ID\n  $journalId: ID\n  $search: String\n) {\n  user {\n    id\n    ...MainPanelJournalSelectorFragment\n    ...MainPanelEntriesFeedFragment_2TEHac\n  }\n}\n\nfragment MainPanelEntriesFeedFragment_2TEHac on User {\n  id\n  entriesFeedJournals: journals(first: 1, id: $journalId) {\n    edges {\n      node {\n        id\n        name\n        entries(first: 20, after: $after, search: $search) {\n          pageInfo {\n            hasNextPage\n            endCursor\n          }\n          edges {\n            node {\n              id\n              ...MainPanelEntryRowFragment\n              __typename\n            }\n            cursor\n          }\n        }\n      }\n    }\n  }\n}\n\nfragment MainPanelEntryRowFragment on Entry {\n  id\n  title\n  createdAt\n  updatedAt\n  content\n}\n\nfragment MainPanelJournalSelectorFragment on User {\n  id\n  journalSelectorJournals: journals(first: 100) {\n    edges {\n      node {\n        id\n        name\n        ordinal\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d4aadaba9b74252fe778fef069b539e";

export default node;
