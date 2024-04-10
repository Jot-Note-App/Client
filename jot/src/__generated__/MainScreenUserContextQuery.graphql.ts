/**
 * @generated SignedSource<<20f8ee013227b1d1529c81c01b03b760>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MainScreenUserContextQuery$variables = Record<PropertyKey, never>;
export type MainScreenUserContextQuery$data = {
  readonly isLoggedIn: boolean;
  readonly user: {
    readonly email: string;
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
  };
};
export type MainScreenUserContextQuery = {
  response: MainScreenUserContextQuery$data;
  variables: MainScreenUserContextQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "isLoggedIn",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "user",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MainScreenUserContextQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainScreenUserContextQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "3e23767534d1bf5119a4c2e44327d3fc",
    "id": null,
    "metadata": {},
    "name": "MainScreenUserContextQuery",
    "operationKind": "query",
    "text": "query MainScreenUserContextQuery {\n  isLoggedIn\n  user {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "d222854bccfa1372971fd7f7b059308e";

export default node;
