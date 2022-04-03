import { ChatEngine } from 'react-chat-engine';

import './App.css';

import ChatFeed from "./components/ChatFeed"

const App = () => {
    return (
    <ChatEngine 
            height = {"100vh"}
            projectID = {"466aae7b-7045-4d6c-bd01-fee2b745bd0c"}
            userName= {"dcam"}
            userSecret= {"123123"}
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps }/>}
            
            />        
    );
};

export default App;