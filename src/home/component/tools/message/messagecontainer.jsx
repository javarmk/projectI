import MessageElement from "./messageelement"
export default function MessageContainer(){
    return(
        <div style={{padding:'5px 5px 5px 10px'}}>
            <div style={{padding:'6px 0px 6px 0px',margin:'0px 0px 5px 0px'}}>
                Message
            </div>
            <MessageElement 
                url='https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/241515205_285166889955504_1933211188467936947_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=GITlSpSwxDkAX-03Wru&_nc_ht=scontent.fhph1-3.fna&oh=ae7db17600c448d37b93e7b04e6ab8c4&oe=61AA041F'
                alt='anh'
                chatName='Messi'
                lastMessage='Hi'
                style={{padding:'5px 5px 5px 0px'}}
            />
            <MessageElement 
                url='https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/241515205_285166889955504_1933211188467936947_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=GITlSpSwxDkAX-03Wru&_nc_ht=scontent.fhph1-3.fna&oh=ae7db17600c448d37b93e7b04e6ab8c4&oe=61AA041F'
                alt='anh'
                chatName='Somebody i used to k'
                lastMessage='Hi'
                style={{padding:'5px 5px 5px 0px'}}
            />
            <MessageElement 
                url='https://scontent.fhph1-3.fna.fbcdn.net/v/t39.30808-1/cp0/p60x60/241515205_285166889955504_1933211188467936947_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=GITlSpSwxDkAX-03Wru&_nc_ht=scontent.fhph1-3.fna&oh=ae7db17600c448d37b93e7b04e6ab8c4&oe=61AA041F'
                alt='anh'
                chatName='Kloop'
                lastMessage='Hi'
                style={{padding:'5px 5px 5px 0px'}}
            />
            
            <div style={{textAlign:'center'}}>
                Het!
            </div>
        </div>
    )
}