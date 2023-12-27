/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChat = /* GraphQL */ `
  subscription OnCreateChat($filter: ModelSubscriptionChatFilterInput) {
    onCreateChat(filter: $filter) {
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
export const onUpdateChat = /* GraphQL */ `
  subscription OnUpdateChat($filter: ModelSubscriptionChatFilterInput) {
    onUpdateChat(filter: $filter) {
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
export const onDeleteChat = /* GraphQL */ `
  subscription OnDeleteChat($filter: ModelSubscriptionChatFilterInput) {
    onDeleteChat(filter: $filter) {
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
export const onCreateChatroom = /* GraphQL */ `
  subscription OnCreateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onCreateChatroom(filter: $filter) {
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
export const onUpdateChatroom = /* GraphQL */ `
  subscription OnUpdateChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onUpdateChatroom(filter: $filter) {
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
export const onDeleteChatroom = /* GraphQL */ `
  subscription OnDeleteChatroom($filter: ModelSubscriptionChatroomFilterInput) {
    onDeleteChatroom(filter: $filter) {
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
