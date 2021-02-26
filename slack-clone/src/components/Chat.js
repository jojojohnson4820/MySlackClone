import React from 'react'
import styled from 'styled-components'
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput'
import ChatMessage from './ChatMessage'

function Chat() {
    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        #Enter-The-Dragon
                    </ChannelName>        
                    <ChannelInfo>
                        All information pertaining meetings and activities.
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                 <Info />
                    
                </ChannelDetails>

            </Header>
            <MessageContainer>

                <ChatMessage />

            </MessageContainer>

            <ChatInput />    

        </Container>

    )
}

export default Chat

const Container = styled.div`
display:grid;
grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom: 5px solid rgb(83,39,83,.16);
justify-content:space-between;

`

const Channel = styled.div`

`

const ChannelName = styled.div`
    font-weight:700;
    font-size:21px;
`
const ChannelInfo = styled.div`
    font-weight:400;
    color: #606060;
    font-size: 14px;
    margin-top:8px;
`


const ChannelDetails = styled.div`
display:flex;
align-items: center;
color: #606060;
`
const Info = styled(InfoOutlinedIcon)`
margin-left:8px;
`
const MessageContainer = styled.div`
/*background: linear-gradient(to right, #D6A4A4, #DAE2F8); */
background: linear-gradient(to right, #cc95c0, #dbd4b4, #7aa1d2); 
/*background: linear-gradient(to right, #1d2b64, #f8cdda);*/

`
