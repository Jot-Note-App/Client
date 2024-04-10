/**
 * @generated SignedSource<<853530ef1b9ec647de1d95ea3333546e>>
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
    "cacheID": "db83fa3674fc81605199f4defff8e084",
    "id": null,
    "metadata": {},
    "name": "AppIsLoggedInQuery",
    "operationKind": "query",
    "text": "query AppIsLoggedInQuery {\n  isLoggedIn\n}\n"
  }
};
})();

(node as any).hash = "3af2fc82ff9b617c05beec1a63d058f9";

export default node;
