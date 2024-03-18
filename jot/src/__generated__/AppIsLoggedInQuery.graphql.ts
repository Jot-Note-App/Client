/**
 * @generated SignedSource<<675ebd56f8518b25e27035d383193a73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AppIsLoggedInQuery$variables = Record<PropertyKey, never>;
export type AppIsLoggedInQuery$data = {
  readonly isLoggedIn: boolean;
  readonly user: {
    readonly email: string;
    readonly firstName: string;
    readonly id: string;
    readonly lastName: string;
  };
};
export type AppIsLoggedInQuery = {
  response: AppIsLoggedInQuery$data;
  variables: AppIsLoggedInQuery$variables;
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
    "name": "AppIsLoggedInQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppIsLoggedInQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "306342e0bfe68606fef3c0d267985b18",
    "id": null,
    "metadata": {},
    "name": "AppIsLoggedInQuery",
    "operationKind": "query",
    "text": "query AppIsLoggedInQuery {\n  isLoggedIn\n  user {\n    id\n    firstName\n    lastName\n    email\n  }\n}\n"
  }
};
})();

(node as any).hash = "1bd5a6f24d0ce1c2ccb39a651d989011";

export default node;
