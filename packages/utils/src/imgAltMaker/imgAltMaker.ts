const imgAltMaker = (str: string = '') => {
    if (str === '') {
        return 'no-alt';
    }
    return str.split('/').pop()?.split('.')[0] || 'no-alt';
};

export default imgAltMaker;
