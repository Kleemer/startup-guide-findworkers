/**
 * @flow
 * @relayHash 3f7adb32b030fc62073380ea2467dbbf
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type HomeAllUsersQueryResponse = {|
  +viewer: {| |};
|};
*/


/*
query HomeAllUsersQuery {
  viewer {
    ...ListPage_viewer
    id
  }
}

fragment ListPage_viewer on Viewer {
  allUsers(filter: {job_contains: "att"}, last: 5, orderBy: createdAt_DESC) {
    edges {
      node {
        ...UserCard_user
        id
      }
    }
  }
}

fragment UserCard_user on User {
  id
  name
  job
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeAllUsersQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListPage_viewer",
            "args": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "HomeAllUsersQuery",
  "query": {
    "argumentDefinitions": [],
    "kind": "Root",
    "name": "HomeAllUsersQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": null,
        "concreteType": "Viewer",
        "name": "viewer",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Viewer",
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "filter",
                    "value": {
                      "job_contains": "att"
                    },
                    "type": "UserFilter"
                  },
                  {
                    "kind": "Literal",
                    "name": "last",
                    "value": 5,
                    "type": "Int"
                  },
                  {
                    "kind": "Literal",
                    "name": "orderBy",
                    "value": "createdAt_DESC",
                    "type": "UserOrderBy"
                  }
                ],
                "concreteType": "UserConnection",
                "name": "allUsers",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "UserEdge",
                    "name": "edges",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "id",
                            "storageKey": null
                          },
                          {
                            "kind": "InlineFragment",
                            "type": "User",
                            "selections": [
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "name",
                                "storageKey": null
                              },
                              {
                                "kind": "ScalarField",
                                "alias": null,
                                "args": null,
                                "name": "job",
                                "storageKey": null
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "allUsers{\"filter\":{\"job_contains\":\"att\"},\"last\":5,\"orderBy\":\"createdAt_DESC\"}"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query HomeAllUsersQuery {\n  viewer {\n    ...ListPage_viewer\n    id\n  }\n}\n\nfragment ListPage_viewer on Viewer {\n  allUsers(filter: {job_contains: \"att\"}, last: 5, orderBy: createdAt_DESC) {\n    edges {\n      node {\n        ...UserCard_user\n        id\n      }\n    }\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  name\n  job\n}\n"
};

module.exports = batch;
