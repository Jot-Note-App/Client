/**
 * @generated SignedSource<<618680b66e4c2359c3ab310e12f38251>>
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
    readonly picture: string | null | undefined;
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "picture",
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
    "cacheID": "93419c3c40c3f55ab4b968270bf70b42",
    "id": null,
    "metadata": {},
    "name": "MainScreenUserContextQuery",
    "operationKind": "query",
    "text": "query MainScreenUserContextQuery {\n  isLoggedIn\n  user {\n    id\n    firstName\n    lastName\n    email\n    picture\n  }\n}\n"
  }
};
})();

(node as any).hash = "01802aadf0cba270903d93ccd30dd617";

export default node;
