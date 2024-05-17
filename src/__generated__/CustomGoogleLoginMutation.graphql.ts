/**
 * @generated SignedSource<<5547fee552b7cb14acd170a3cbdc69de>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type CustomGoogleLoginMutation$variables = {
  credentials: string;
};
export type CustomGoogleLoginMutation$data = {
  readonly loginOrSignUpWithGoogle: {
    readonly error?: string;
    readonly success?: boolean;
  };
};
export type CustomGoogleLoginMutation = {
  response: CustomGoogleLoginMutation$data;
  variables: CustomGoogleLoginMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "credentials"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "credentials",
    "variableName": "credentials"
  }
],
v2 = {
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
  "type": "LoginSuccess",
  "abstractKey": null
},
v3 = {
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
  "type": "LoginFailure",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CustomGoogleLoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "loginOrSignUpWithGoogle",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CustomGoogleLoginMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "loginOrSignUpWithGoogle",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "79398d963286db381bf5ac2e4557d4bf",
    "id": null,
    "metadata": {},
    "name": "CustomGoogleLoginMutation",
    "operationKind": "mutation",
    "text": "mutation CustomGoogleLoginMutation(\n  $credentials: String!\n) {\n  loginOrSignUpWithGoogle(credentials: $credentials) {\n    __typename\n    ... on LoginSuccess {\n      success\n    }\n    ... on LoginFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d71b6babf326f3c86a99d2b0ca710572";

export default node;
