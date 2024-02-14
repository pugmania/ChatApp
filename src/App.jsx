import {useEffect, useState} from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { generateClient } from "aws-amplify/api";
import { mutations, queries } from './graphql';
import awsmobile from './aws-exports';
import {
  MainContainer,
  ChatContainer,
  MessageList,
  Message,
  MessageInput,
  Conversation,
  ConversationList,
  Sidebar,
  Avatar,
  ConversationHeader,
  InfoButton
} from "@chatscope/chat-ui-kit-react";
import { list, getUrl } from 'aws-amplify/storage'

const client = generateClient()
Amplify.configure(awsmobile);

export default function App() {
  const [backgroundImage, setBackgroundImage] = useState(''); // 
  const [message, setMessage] = useState('');
  const [chatrooms, setChatrooms] = useState([]);
  const [chats, setChats] = useState([]);

  useEffect(() => {
    async function updateBackgroundImage() {
      const imageName = await getRandomImage();
      if (imageName) {
        const url = await getUrl(imageName, { level: 'public' });
        setBackgroundImage(url);
      }
    }
    updateBackgroundImage();
  }, [])
  
  useEffect( () => {
    client.graphql({query: queries.listChatrooms})
    .then((result) => {setChatrooms(result.data.listChatrooms.items)})
  }, [])

  const listImages = async () => {
    try {
      const result = await list('public/photos/', { level: 'public' });
      return result.items.map(file => file.key);
    } catch (error) {
      console.error('Error fetching images from S3', error);
      return [];
    }
  }

  const getRandomImage = async () => {
    const images = await listImages();
    if (images.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }

  const sendChat = () => {
    if (!message.trim()) return; // Prevent sending empty messages

    try {
      // Replace 'createChat' with the appropriate mutation from your GraphQL schema
      const chatData = { content: message }; // Adjust based on your schema
      client.graphql({ query: mutations.createChat, variables: { input: chatData } })
      .then(() => {setMessage('')})
      } catch (err) {console.log('error sending chat:', err);}
  }

  const selectChatroom = (chatroom) => {
    client.graphql({query: queries.getChatroom, variables: {id: chatroom.id}})
    .then((result) => {setChats(result.data.getChatroom.chats.items)})
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendChat();
    }
  }
  return  <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="App-header">
              <h1>Chat App</h1>
            </header>
            <Authenticator loginMechanisms={['email', 'username']} socialProviders={['google']}>
              {({ signOut, user }) => (
                <main>
                  <h2>Hello {user.username}</h2>
                  <p>Choose a chatroom below</p>
                    <MainContainer>
                      {chatrooms &&
                      <Sidebar position="left" scrollable={false}>
                        <ConversationList>
                          {chatrooms.map((chatroom) => (
                            <Conversation
                              key={chatroom.id}
                              name={chatroom.title}
                              lastSenderName={chatroom.owner}
                              info={chatroom.createdAt}
                              unreadCnt={0}
                              active
                              onClick={() => selectChatroom(chatroom)}
                            >
                              <Avatar src={null} name={chatroom.owner} />
                            </Conversation>
                        ))}
                        </ConversationList>
                      </Sidebar>}
                      <ChatContainer>
                        <ConversationHeader>
                          <Avatar src={null} name="Zoe" />
                          <ConversationHeader.Content userName="Zoe" info="Active 10 mins ago" />
                          <ConversationHeader.Actions>
                            <InfoButton />
                          </ConversationHeader.Actions>          
                        </ConversationHeader>
                        <MessageList>
                          {chats &&
                            chats.map((chat) => (
                              <Message
                                key={chat.id}
                                model={{
                                  message: chat.content,
                                  sentTime: chat.createdAt,
                                  sender: chat.owner,
                                }}
                              />
                          ))}
                          {<Message
                            model={{
                              message: "Hello my friend",
                              sentTime: "just now",
                              sender: "Joe",
                            }}
                          />}
                        </MessageList>
                        <MessageInput placeholder="Type message here" />
                      </ChatContainer>
                    </MainContainer>            
                  <button onClick={() => sendChat()}>Send</button>
                  <button onClick={() => signOut()}>Sign out</button>
                </main>
              )}
            </Authenticator>
          </div>
}