/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getChat = /* GraphQL */ `
  query GetChat($id: ID!) {
    getChat(id: $id) {
      id
      message
      chatroomID
      Chatroom {
        id
        title
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const chatsByChatroomID = /* GraphQL */ `
  query ChatsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message
        chatroomID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatroom = /* GraphQL */ `
  query GetChatroom($id: ID!) {
    getChatroom(id: $id) {
      id
      title
      Chats {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChatrooms = /* GraphQL */ `
  query ListChatrooms(
    $filter: ModelChatroomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatrooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
