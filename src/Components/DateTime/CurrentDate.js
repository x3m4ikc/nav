const CurrentDate = () => {

    const curDate = new Date().toLocaleDateString();
    return curDate;
};

export default CurrentDate;