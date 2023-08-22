import imgAltMaker from './imgAltMaker';

describe('imgAltMaker test', () => {
    it('imgAltMaker should be defined', () => {
        expect(imgAltMaker).toBeDefined();
    });

    it('imgAltMaker should return no-alt with undefined', () => {
        expect(imgAltMaker()).toBe('no-alt');
    });

    it('imgAltMaker should return no-alt with empty string', () => {
        expect(imgAltMaker('')).toBe('no-alt');
    });

    it('imgAltMaker should return text without link and file extension name', () => {
        const testImgSrc = 'https://www.test.com/test.jpg';
        const testImgAlt = 'test';
        const testImgSrc2 = 'https://www.test.com/test/test.jpg';

        expect(imgAltMaker(testImgSrc)).toBe('test');
        expect(imgAltMaker(testImgSrc2)).toBe('test');
    });
});
