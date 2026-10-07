function status({isLoggedIn}){
    return(
        <h1>{isLoggedIn ?"welcome back!":"pleaselog in."}</h1>
    );
}
function Notification({hasUnread}){
    return(
        <div>
            <h2>Inbox</h2>
            {hasUnread && <p>You have Unread messages!</p>}
        </div>
    );
}
function Condition(){
    return(
        <>
        <h1>{status({isLoggedIn:true})}</h1>
        <h1>{Notification({hasUnread :true})}</h1>
        </>
    )
} export default Condition 