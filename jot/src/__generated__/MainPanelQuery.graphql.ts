/**
 * @generated SignedSource<<e4553957fd131ce0a7874a14aaca4744>>
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
  first: number;
  journalId?: string | null | undefined;
  search?: string | null | undefined;
};
export type MainPanelQuery$data = {
  readonly user: {
    readonly entriesFeedJournals: {
      readonly edges: ReadonlyArray<{
        readonly node: {
          readonly id: string;
          readonly " $fragmentSpreads": FragmentRefs<"MainPanelEntriesFeedFragment">;
        };
      }>;
    } | null | undefined;
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"MainPanelJournalSelectorFragment">;
  };
};
export type MainPanelQuery = {
  response: MainPanelQuery$data;
  variables: MainPanelQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "after"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "first"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "journalId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "search"
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "journalId"
  }
],
v6 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "after"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "first"
  },
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "search"
  }
],
v7 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "endCursor",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "hasNextPage",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
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
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MainPanelJournalSelectorFragment"
          },
          {
            "alias": "entriesFeedJournals",
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
                      (v4/*: any*/),
                      {
                        "args": (v6/*: any*/),
                        "kind": "FragmentSpread",
                        "name": "MainPanelEntriesFeedFragment"
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
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/)
    ],
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
          (v4/*: any*/),
          {
            "alias": "journalSelectorJournals",
            "args": (v7/*: any*/),
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
                      (v4/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "ordinal",
                        "storageKey": null
                      },
                      (v9/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
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
                  (v11/*: any*/),
                  (v12/*: any*/)
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
            "args": (v7/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "MainPanelJournalSelectorFragment_journalSelectorJournals",
            "kind": "LinkedHandle",
            "name": "journals"
          },
          {
            "alias": "entriesFeedJournals",
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
                      (v4/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
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
                              (v12/*: any*/),
                              (v11/*: any*/)
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
                                  (v4/*: any*/),
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
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": (v6/*: any*/),
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
    "cacheID": "612b6d35883d143a45e31dc70984b27a",
    "id": null,
    "metadata": {},
    "name": "MainPanelQuery",
    "operationKind": "query",
    "text": "query MainPanelQuery(\n  $first: Int!\n  $after: ID\n  $journalId: ID\n  $search: String\n) {\n  user {\n    id\n    ...MainPanelJournalSelectorFragment\n    entriesFeedJournals: journals(first: 1, id: $journalId) {\n      edges {\n        node {\n          id\n          ...MainPanelEntriesFeedFragment_1Ozsmw\n        }\n      }\n    }\n  }\n}\n\nfragment MainPanelEntriesFeedFragment_1Ozsmw on Journal {\n  id\n  name\n  entries(first: $first, after: $after, search: $search) {\n    pageInfo {\n      hasNextPage\n      endCursor\n    }\n    edges {\n      node {\n        id\n        ...MainPanelEntryRowFragment\n        __typename\n      }\n      cursor\n    }\n  }\n}\n\nfragment MainPanelEntryRowFragment on Entry {\n  id\n  title\n  createdAt\n  updatedAt\n  content\n}\n\nfragment MainPanelJournalSelectorFragment on User {\n  id\n  journalSelectorJournals: journals(first: 100) {\n    edges {\n      node {\n        id\n        name\n        ordinal\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "20d644780274644d5382992db6b5fb6d";

export default node;
