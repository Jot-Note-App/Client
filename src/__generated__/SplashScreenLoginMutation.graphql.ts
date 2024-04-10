/**
 * @generated SignedSource<<8329ebbbce6d941aff5995b4f8f7217c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type SplashScreenLoginMutation$variables = {
  credentials: string;
};
export type SplashScreenLoginMutation$data = {
  readonly loginOrSignUpWithGoogle: {
    readonly error?: string;
    readonly success?: boolean;
  };
};
export type SplashScreenLoginMutation = {
  response: SplashScreenLoginMutation$data;
  variables: SplashScreenLoginMutation$variables;
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
    "name": "SplashScreenLoginMutation",
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
    "name": "SplashScreenLoginMutation",
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
    "cacheID": "77a6dc468e26f2b485bd837c932a1db3",
    "id": null,
    "metadata": {},
    "name": "SplashScreenLoginMutation",
    "operationKind": "mutation",
    "text": "mutation SplashScreenLoginMutation(\n  $credentials: String!\n) {\n  loginOrSignUpWithGoogle(credentials: $credentials) {\n    __typename\n    ... on LoginSuccess {\n      success\n    }\n    ... on LoginFailure {\n      error\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "bc9c5e986bfdde8990068208ffb17218";

export default node;
