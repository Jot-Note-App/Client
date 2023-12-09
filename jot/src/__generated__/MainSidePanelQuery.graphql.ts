/**
 * @generated SignedSource<<f725fd36d2ebd6881361480ec2f9adfa>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MainSidePanelQuery$variables = Record<PropertyKey, never>;
export type MainSidePanelQuery$data = {
  readonly user: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"MainSidePanelUserProfileInfoFragment">;
  };
};
export type MainSidePanelQuery = {
  response: MainSidePanelQuery$data;
  variables: MainSidePanelQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainSidePanelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MainSidePanelUserProfileInfoFragment"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainSidePanelQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "email",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "firstName",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "lastName",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8270df06dfda15450c3411b59e56bf99",
    "id": null,
    "metadata": {},
    "name": "MainSidePanelQuery",
    "operationKind": "query",
    "text": "query MainSidePanelQuery {\n  user {\n    id\n    ...MainSidePanelUserProfileInfoFragment\n  }\n}\n\nfragment MainSidePanelUserProfileInfoFragment on User {\n  id\n  email\n  firstName\n  lastName\n}\n"
  }
};
})();

(node as any).hash = "1bba3ca9e21ec4881816e57d4e8127fa";

export default node;
