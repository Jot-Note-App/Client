/**
 * @generated SignedSource<<168d258ee3b87cb0733aa584002bcdb8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type GoogleLogoutLogoutMutation$variables = Record<PropertyKey, never>;
export type GoogleLogoutLogoutMutation$data = {
  readonly logout: {
    readonly error?: string;
    readonly success?: boolean;
  };
};
export type GoogleLogoutLogoutMutation = {
  response: GoogleLogoutLogoutMutation$data;
  variables: GoogleLogoutLogoutMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "success",
      "storageKey": null
    }
  ],
  "type": "LogoutSuccess",
  "abstractKey": null
},
v1 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "error",
      "storageKey": null
    }
  ],
  "type": "LogoutFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GoogleLogoutLogoutMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "logout",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GoogleLogoutLogoutMutation",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "logout",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bef68098d8e6ba46656c91edd7167546",
    "id": null,
    "metadata": {},
    "name": "GoogleLogoutLogoutMutation",
    "operationKind": "mutation",
    "text": "mutation GoogleLogoutLogoutMutation {\n  logout {\n    __typename\n    ... on LogoutSuccess {\n      success\n    }\n    ... on LogoutFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "0843eb0e67b776845bc27c592fb636f4";

export default node;
