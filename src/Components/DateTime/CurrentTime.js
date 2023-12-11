const CurrentTime = () => {

    const curTime = new Date().toLocaleTimeString({hour: '2-digit', minute: '2-digit'})
    const timeToShow = curTime.split(':')
    return timeToShow[0] + ":" + timeToShow[1];
};

export default CurrentTime;