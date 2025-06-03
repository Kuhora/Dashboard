function Greetings({ userName }: { userName: string }) {
    const timerG = new Date().getHours();
    let greetings;
    if (timerG < 12) {
    greetings = 'Good Morning';
    } else if (timerG < 18) {
    greetings = 'Good Afternoon';
    } else {
    greetings = 'Good Night';
    }

    return (
    <div className="greetings">
        <h2>{greetings}, {userName}!</h2>
    </div>
    );
}

export default Greetings